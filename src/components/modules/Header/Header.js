import React from "react";
/*import styles from "./Header.sass";*/
import styles from "./Header.module.css";

function Header({ completed, moveCount }) {
  return (
    <div className={styles.header}>
      <button className={styles.btn} onClick={() => window.location.reload()}>New Game</button>
      <span>
        Completed: {completed} Move:{moveCount}
      </span>
    </div>
  );
}

export default Header;
