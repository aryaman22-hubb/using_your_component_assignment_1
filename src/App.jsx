import BookCard from "./components/bookcard";
import "./App.css"; // Import global styles

function App() {
  const books = [
    { id: 1, image: "https://via.placeholder.com/150", name: "The Great Adventure", genre: "Fiction", author: "Jane Doe" },
    { id: 2, image: "https://via.placeholder.com/150", name: "Mysteries of the Universe", genre: "Science", author: "John Smith" },
    { id: 3, image: "https://via.placeholder.com/150", name: "History Revisited", genre: "Non-Fiction", author: "Emily Johnson" },
    { id: 4, image: "https://via.placeholder.com/150", name: "Culinary Delights", genre: "Cooking", author: "Michael Brown" },
  ];

  return (
    <div className="app">
      <h1>📚 Digital Library</h1>
      <div className="book-container">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
