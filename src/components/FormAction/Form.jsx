import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ onBookIdChange }) {
  const [searchTerm, setSearchTerm] = useState("ES8yjgEACAAJ");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const bookHandler = (event) => {
    event.preventDefault();
    console.log("Search term:", searchTerm);
    onBookIdChange(searchTerm); // Update bookId in App component
  };

  return (
    <form>
      <h2> Search a book by ID </h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className={styles.input}
      ></input>
      <button onClick={bookHandler} className={styles.button}>
        Search
      </button>
    </form>
  );
}
