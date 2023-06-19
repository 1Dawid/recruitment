import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Example.module.css";
const Example = () => {
  const [bookIds, setBookIds] = useState([]);

  useEffect(() => {
    const getRandomBookIds = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=10"
        );
        const books = response.data.items;
        const randomIds = [];

        while (randomIds.length < 5) {
          const randomIndex = Math.floor(Math.random() * books.length);
          if (!randomIds.includes(randomIndex)) {
            randomIds.push(randomIndex);
          }
        }

        const randomBookIds = randomIds.map((index) => books[index].id);
        setBookIds(randomBookIds);
      } catch (error) {
        console.error("Error fetching random book IDs:", error);
      }
    };

    getRandomBookIds();
  }, []);

  return (
    <div className={styles["example-module"]}>
      <h2>Random Book IDs:</h2>
      <ul>
        {bookIds.map((bookId) => (
          <li key={bookId}>{bookId}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example;
