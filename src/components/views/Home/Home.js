import React from "react";
import { Link } from "react-router-dom";
import HomePageLayout from "../../modules/HomePageLayout/HomePageLayout.js";
import styles from "./Home.sass";

export default function Home() {
  return (
    <HomePageLayout>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/game">Start</Link>
        </li>
        <li>
          <Link to="/about">Records</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </HomePageLayout>
  );
}
