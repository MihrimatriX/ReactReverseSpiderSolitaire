import React from "react";
import { Link } from "react-router-dom";
import HomePageLayout from "../../modules/HomePageLayout/HomePageLayout";
import styles from "../../../styles/views/Home.sass";

export default function Home() {
  return (
    <HomePageLayout>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/game">Start</Link>
        </li>
      </ul>
    </HomePageLayout>
  );
}
