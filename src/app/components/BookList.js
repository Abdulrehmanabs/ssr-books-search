export default function BookList({ books, total }) {
  return (
    <div>
      <h2 className="total-books">
        Total Books:
        <span>{total}</span>
      </h2>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={{ color: "gray", textAlign: "center" }} colSpan="3">
                No search results for your query try another one
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
