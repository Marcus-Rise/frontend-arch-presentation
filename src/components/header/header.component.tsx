import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import { ClassNames } from "../../utils/class-names";
import { siteConfig } from "../../site.config";

const Header: React.FC<{
  title: string;
  author: {
    name: string;
    url: string;
  };
  date: string;
}> = (props) => {
  return (
    <header className={styles.root}>
      <div>
        <Link href={props.author.url}>
          <a className={styles.link}>{props.author.name}</a>
        </Link>
        {" — "}
        <Link href={"/"}>
          <a className={ClassNames(styles.link, styles.name)}>{props.title}</a>
        </Link>
      </div>
      <div className={styles.meta}>
        <Link href={siteConfig.src}>
          <a className={ClassNames(styles.link, styles.name)} target={"_blank"}>
            Sources available on Github
          </a>
        </Link>
        {" — "}
        <time>{props.date}</time>
      </div>
    </header>
  );
};

export { Header };
