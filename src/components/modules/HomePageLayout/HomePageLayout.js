import React from "react";
import styles from "./HomePageLayout.sass";

export default function HomePageLayout(props) {
  return (
    <React.Fragment>
      <div className={styles.pageLayout}>
        <div className={styles.middleBox}>{props.children}</div>
      </div>
    </React.Fragment>
  );
}
