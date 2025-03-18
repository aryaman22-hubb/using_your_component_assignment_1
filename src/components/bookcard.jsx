import PropTypes from "prop-types";
import "./BookCard.css"; // Import CSS for styling

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <div className="book-details">
        <h2 className="book-title">{book.name}</h2>
        <p className="book-genre"><strong>Genre:</strong> {book.genre}</p>
        <p className="book-author"><strong>Author:</strong> {book.author}</p>
      </div>
    </div>
  );
};

// ✅ Add PropTypes Validation
BookCard.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
