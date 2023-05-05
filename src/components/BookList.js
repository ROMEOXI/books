import BookShow from './BookShow';

function BookList({ books, onDelete }) {
    const rerenderedBooks = books.map((book) => {
        return <BookShow onDelete={onDelete} keey={book.id} book={book} />;
    });

    return (<div className='book-list'>{rerenderedBooks}</div>);
}

export default BookList;