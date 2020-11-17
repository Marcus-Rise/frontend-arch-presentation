import React from "react";
import styles from "./slide.module.scss";

const Slide: React.FC = (props) => <div className={styles.root}>{props.children}</div>;

export { Slide };
