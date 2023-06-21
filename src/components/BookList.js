import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();

  const rerenderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <div>
      <div className="book-list">{rerenderedBooks}</div>;
      <div style={{ height: "300px", weight: "100%" }} />
    </div>
  );
}

export default BookList;
