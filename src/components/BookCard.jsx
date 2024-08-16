import axios from "axios";

function BookCard(props) {
  const book = props.book;

  const handleDeleteBook = () => {
    axios
      .delete("https://long-nguyen-300356398-final-backend.vercel.app/api/v1/book/" + props.book._id)
      .then(props.onDataUpdate())
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div className="desc">
        <h2>
          <a href="/show-book/123id">{book.bookTitle}</a>
        </h2>
        <h3>{book.bookAuthor}</h3>
        <p>
          {book.description}
          <span>
            <button style={{ float: "right" }} onClick={handleDeleteBook}>
              X
            </button>
          </span>
        </p>
      </div>
    </div>
  );
}

export default BookCard;
