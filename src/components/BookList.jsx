import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BookCard from "./BookCard";

function BookList() {
  const [books, setBooks] = useState([]);
  const [dataUpdate, SetDataUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("https://long-nguyen-300356398-final-backend.vercel.app/api/v1/book")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Error from BookList");
      });
  }, [dataUpdate]);

  const handleDataUpdate = () => {
    alert("Book Deleted");
    SetDataUpdate({
      dataUpdate: !dataUpdate,
    });
  };

  const bookList =
    books.length === 0
      ? "there is no book record!"
      : books.map((book, k) => (
          <BookCard book={book} key={k} onDataUpdate={handleDataUpdate} />
        ));

  return (
    <div className="BookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/create-book"
              className="btn btn-outline-warning float-right"
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{bookList}</div>
      </div>
    </div>
  );
}

export default BookList;
