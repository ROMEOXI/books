import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
    const rerenderedBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} onDelete={onDelete} keey={book.id} book={book} />;
    });

    return (<div className='book-list'>{rerenderedBooks}</div>);
}

export default BookList;