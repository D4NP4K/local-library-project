function findAuthorById(authors, id) {
  return matchingAuthors = authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return BookId = books.find((books) => books.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const booksBorrowed = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  const returnedBooks = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
  return newBookArray = [[...booksBorrowed], [...returnedBooks]];
}

function getBorrowersForBook(book, accounts) {
  return (book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account};
    })
  .slice(0, 10)
  );
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
