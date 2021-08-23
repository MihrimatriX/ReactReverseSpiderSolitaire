import React from "react";
/*import styles from "./HomePageLayout.sass";*/
import styles from "./HomePageLayout.module.css";

export default function HomePageLayout(props) {
  return (
    <React.Fragment>
      <div className={styles.pageLayout}>
        <div className={styles.middleBox}>{props.children}</div>
      </div>
    </React.Fragment>
  );
}
