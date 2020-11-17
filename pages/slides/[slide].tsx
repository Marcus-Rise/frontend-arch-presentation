import type { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { siteConfig } from "../../src/site.config";
import { Navigator } from "../../src/components/navidator";
import { Slide } from "../../src/components/slide";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import { Code } from "../../src/components/code";

interface IProps {
  totalSlidePages: number;
  currentSlide: number;
  filename: string;
}

enum KeyboardKey {
  ARROW_LEFT = "ArrowLeft",
  ARROW_RIGHT = "ArrowRight",
}

const h1: React.FC = (props) => <h1 style={{ textAlign: "center" }} {...props} />;
const pre: React.FC = (props) => <div {...props} />;

const components = {
  h1,
  pre,
  code: Code,
};

const SlideshowPage: React.FC<IProps> = ({ currentSlide, totalSlidePages }) => {
  const MDXContent = dynamic(() => import(`../../slides/${currentSlide}.mdx`));
  const router = useRouter();
  const goToSlide = (slide: number) => router.push(`/slides/${slide}`);
  const goToPrev = (): void => {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    }
  };
  const goToNext = (): void => {
    if (currentSlide < totalSlidePages) {
      goToSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    const navigate = ({ key }: KeyboardEvent): void => {
      if (key === KeyboardKey.ARROW_RIGHT) {
        goToNext();
      } else if (key === KeyboardKey.ARROW_LEFT) {
        goToPrev();
      }
    };

    window.addEventListener("keydown", navigate);

    return () => {
      window.removeEventListener("keydown", navigate);
    };
  });

  return (
    <>
      <Head>
        <title>
          {siteConfig.author.name} - {siteConfig.title}
        </title>
      </Head>
      <Slide>
        <MDXProvider components={components}>
          <MDXContent />
        </MDXProvider>
      </Slide>
      <Navigator
        pagesTotalCount={totalSlidePages}
        pageCurrentNumber={currentSlide}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </>
  );
};

const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  const filename = path.join("slides", `${params?.slide}.mdx`);
  const slidesDirectory = path.join(process.cwd(), "slides");
  const mdxFiles = fs.readdirSync(slidesDirectory);
  const totalSlidePages = mdxFiles.length;

  return {
    props: {
      totalSlidePages,
      currentSlide: Number(params?.slide),
      filename,
    },
  };
};

const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), "slides");
  const mdxFiles = fs.readdirSync(postsDirectory);
  // Loop through all post files and create array of slugs (to create links)
  const paths = mdxFiles.map((filename) => ({
    params: {
      slide: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export { getStaticPaths, getStaticProps };
export default SlideshowPage;
