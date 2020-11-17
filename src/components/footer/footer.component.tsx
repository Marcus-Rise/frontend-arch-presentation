import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC<{ pagesTotalCount: number; pageCurrentNumber: number }> = (props) => {
  return (
    <footer className={styles.root}>
      {props.pageCurrentNumber}
      {" / "}
      {props.pagesTotalCount}
    </footer>
  );
};

export { Footer };
