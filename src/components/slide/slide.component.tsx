import React from "react";
import styles from "./slide.module.scss";

const Slide: React.FC = (props) => (
  <div className={styles.root}>
    <div className={styles.container}>{props.children}</div>
  </div>
);

export { Slide };
