import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddBook(props) {
  const navigate = useNavigate();

  const handleAddBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.title.value;
    const bookAuthor = form.author.value;
    const description = form.description.value;

    const newBook = {
      bookTitle: bookTitle,
      bookAuthor: bookAuthor,
      description: description,
    };
    axios
      .post(
        "https://long-nguyen-300356398-final-backend.vercel.app/api/v1/book",
        newBook
      )
      .then(() => {
        alert("New Book Added!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-info float-left">
              Show Book List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form noValidate="" onSubmit={handleAddBook}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  // value=""
                  spellCheck="false"
                  data-ms-editor="true"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  // value=""
                  spellCheck="false"
                  data-ms-editor="true"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  // value=""
                  spellCheck="false"
                  data-ms-editor="true"
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
