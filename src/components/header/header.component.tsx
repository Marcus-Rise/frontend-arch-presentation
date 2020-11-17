import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import { ClassNames } from "../../utils/class-names";

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
      <time className={styles.time}>{props.date}</time>
    </header>
  );
};

export { Header };
