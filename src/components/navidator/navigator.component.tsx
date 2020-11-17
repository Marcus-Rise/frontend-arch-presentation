import React from "react";
import styles from "./navigator.module.scss";

const Navigator: React.FC<{
  pagesTotalCount: number;
  pageCurrentNumber: number;
  onPrev: () => void;
  onNext: () => void;
}> = (props) => {
  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={props.onPrev}>
        ‹
      </button>
      <span className={styles.status}>
        {props.pageCurrentNumber}
        {" / "}
        {props.pagesTotalCount}
      </span>
      <button className={styles.button} onClick={props.onNext}>
        ›
      </button>
    </div>
  );
};

export { Navigator };
