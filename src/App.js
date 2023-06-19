import React, { useState } from "react";
import BookAuthors from "./components/BookAuthors/BookAuthors";
import styles from "./App.module.css";
import GoogleBooks from "./GoogleBooks";
import Form from "./components/FormAction/Form";
import Footer from "./components/Footer/Footer";
import Example from "./components/FormAction/Example";

const App = () => {
  const [bookId, setBookId] = useState("ES8yjgEACAAJ");
  const [showBookAuthors, setShowBookAuthors] = useState(false);

  const handleBookIdChange = (newBookId) => {
    setBookId(newBookId);
  };

  const bookHandler = () => {
    setShowBookAuthors(true);
  };

  return (
    <div className={styles["all-content"]}>
      <div className={styles.container}>
        <h1>Recruitment Task</h1>
        <div className={styles.searchConsole}>
          <Form
            onBookIdChange={handleBookIdChange}
            onButtonClick={bookHandler}
          />
          <Example />
        </div>
        {setShowBookAuthors && <BookAuthors bookId={bookId} />}
        {/* <GoogleBooks /> */}
      </div>

      <Footer />
    </div>
  );
};

export default App;
