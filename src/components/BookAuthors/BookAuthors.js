import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookAuthors.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const BookAuthors = ({ bookId }) => {
  const [authors, setAuthors] = useState([]);
  // const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [pagecount, setPageCount] = useState("");

  const [booksByAuthor, setBooksByAuthor] = useState([]);

  //what to show...............................................................

  //title
  const [showTitle, setShowTitle] = useState(false);
  const handleTitleClick = () => {
    setShowTitle(!showTitle);
  };

  // //description
  // const [showDescription, setShowDescription] = useState(false);
  // const handleDescriptionClick = () => {
  //   setShowDescription(!showDescription);
  // };

  //authors
  const [showAuthors, setShowAuthors] = useState(false);
  const handleAuthorsClick = () => {
    setShowAuthors(!showAuthors);
  };

  //subtitle
  const [showSubTitle, setShowSubtitle] = useState(false);
  const handleSubTitleClick = () => {
    setShowSubtitle(!showSubTitle);
  };

  //pagecount
  const [showPageCount, setshowPageCount] = useState(false);
  const handlePageCountClick = () => {
    setshowPageCount(!showPageCount);
  };

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        const book = response.data;
        const bookAuthors = book.volumeInfo.authors || [];
        ///const bookDescription = book.volumeInfo.description || "";
        const bookTitle = book.volumeInfo.title || "";
        const bookSubTItle = book.volumeInfo.subtitle || "";
        const bookpageCount = book.volumeInfo.pageCount || "";

        setAuthors(bookAuthors);
        // setDescription(bookDescription);
        setTitle(bookTitle);
        setSubtitle(bookSubTItle);
        setPageCount(bookpageCount);

        // Fetch more books by the first author
        if (bookAuthors.length > 0) {
          const author = bookAuthors[0];
          const booksByAuthorResponse = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`
          );
          const books = booksByAuthorResponse.data.items || [];
          setBooksByAuthor(books);
        }

        setAuthors(bookAuthors);
      } catch (error) {
        console.error("Error fetching book authors:", error);
      }
    };

    fetchAuthors();
  }, [bookId]);

  return (
    <div>
      {/* <Breadcrumbs bookId={bookId} /> */}
      <div className="breadcrumbs-all">
        <span>{bookId} </span>
        <span> volumeInfo </span>
        {showTitle && <span> Title </span>}
        {/* {showDescription && <span> Description </span>} */}
        {showAuthors && <span> Authors </span>}
        {showSubTitle && <span> Subtitle </span>}
        {showPageCount && <span> PageCount </span>}
      </div>
      <h2>Click for a Book Info:</h2>
      <div className="forTitle es">
        {showTitle && (
          <div className="breadcrumb" onClick={handleTitleClick}>
            Title: <br></br>
            {title}
          </div>
        )}
        {!showTitle && (
          <span className="breadcrumb" onClick={handleTitleClick}>
            Title
          </span>
        )}
      </div>
      {/* <div className="forDescription">
        {showDescription && (
          <div className="breadcrumb" onClick={handleDescriptionClick}>
            Description: <br></br>
            {description}
          </div>
        )}
        {!showDescription && (
          <span className="breadcrumb" onClick={handleDescriptionClick}>
            Description
          </span>
        )}
      </div> */}
      <div className="forAuthors es">
        {showAuthors && (
          <div className="breadcrumb" onClick={handleAuthorsClick}>
            Authors: <br></br>
            {authors}
          </div>
        )}
        {!showAuthors && (
          <span className="breadcrumb" onClick={handleAuthorsClick}>
            Authors
          </span>
        )}
      </div>
      <div className="forSubTitle es">
        {showSubTitle && (
          <div className="breadcrumb" onClick={handleSubTitleClick}>
            Subtitle: <br></br>
            {subtitle}
          </div>
        )}
        {!showSubTitle && (
          <span className="breadcrumb" onClick={handleSubTitleClick}>
            Subtitle
          </span>
        )}
      </div>
      <div className="forPageCount es">
        {showPageCount && (
          <div className="breadcrumb" onClick={handlePageCountClick}>
            PageCount: <br></br>
            {pagecount}
          </div>
        )}
        {!showPageCount && (
          <span className="breadcrumb" onClick={handlePageCountClick}>
            PageCount
          </span>
        )}
      </div>

      <h2>Other books by {authors[0]}</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Pagecount</th>
          </tr>
        </thead>
        <tbody>
          {booksByAuthor.map((book, index) => (
            <tr key={index}>
              <td>{book.id}</td>
              <td>{title}</td>
              <td>{subtitle}</td>
              <td>{pagecount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookAuthors;
