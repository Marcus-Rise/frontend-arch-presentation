import React from "react";
import styles from "./navigator.module.scss";

const Navigator: React.FC<{ pagesTotalCount: number; pageCurrentNumber: number }> = (props) => {
  return (
    <div className={styles.root}>
      {props.pageCurrentNumber}
      {" / "}
      {props.pagesTotalCount}
    </div>
  );
};

export { Navigator };
