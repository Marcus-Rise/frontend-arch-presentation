import React from "react";
import styles from "./li.module.scss";

const Li: React.FC = (props) => (
  <li {...props} className={styles.root}>
    <span className={styles.content}>{props.children}</span>
  </li>
);

export { Li };
