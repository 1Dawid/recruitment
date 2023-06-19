import React from "react";
import styles from "./Breadcrumbs.module.css";
const Breadcrumbs = ({ bookId, title }) => {
  return (
    <div className={styles.breadcrumbs}>
      <span>book-id</span>
      <span>volumeInfo</span>
    </div>
  );
};

export default Breadcrumbs;
