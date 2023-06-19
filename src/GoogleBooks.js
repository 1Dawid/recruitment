import React, { useEffect, useState } from "react";
import axios from "axios";

const GoogleBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=react"
        );
        const booksData = response.data.items || [];
        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const formatDescription = (description) => {
    if (!description) {
      return "";
    }
    const formattedDescription = description
      .replace(/<b>(.*?)<\/b>/g, "<strong>$1</strong>")
      .replace(/<i>(.*?)<\/i>/g, "<em>$1</em>");
    return formattedDescription;
  };

  return (
    <div>
      <h2>Books about React</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.id}</td>
              <td>{book.volumeInfo.title}</td>
              <td
                dangerouslySetInnerHTML={{
                  __html: formatDescription(book.volumeInfo.description),
                }}
              ></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GoogleBooks;
