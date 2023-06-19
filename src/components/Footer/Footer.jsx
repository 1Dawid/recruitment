import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        Created by
        <a href="mailto: davidkakolomiets@gmail.com"> @Davyd_Kolomiiets </a> for
        KONGSBERG
      </div>
    </footer>
  );
}
