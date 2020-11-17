import React from "react";
import Head from "next/head";
import "../src/styles/globals.scss";
import type { AppProps } from "next/app";
import { Header } from "../src/components/header";
import { siteConfig } from "../src/site.config";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>
      <Header {...siteConfig} />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
