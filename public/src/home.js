function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    const booksArray = books[i];
    for (let j = 0; j < booksArray.borrows.length; j++) {
      if (booksArray.borrows[j].returned === false) {
        total++;
      };
    };
  };
  return total;
}

function getMostCommonGenres(books) {
  const common = {};
  books.forEach((book) => {
    if (common[book.genre]) {
      common[book.genre]++;
    } else {
      common[book.genre] = 1;
    }
  });
  const genreNames = Object.keys(common);
  const results = [];
  genreNames.forEach((names) => { results.push({ name: names, count: common[names] });
  });
  return results.sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  return _sortAndSlice(
    books.map((book) => ({ name: book.title, count: book.borrows.length })),
    0,
    5,
);
}
//Helper Function
const _sortAndSlice = (array, startNum, endNum) =>
array.sort((bookA, bookB) => bookB.count - bookA.count).slice(startNum, endNum);


function getMostPopularAuthors(books, authors) {
  let popAuthArray = [];
  books.forEach(book => {
    authors.forEach(author => {
      if (book.authorId === author.id) {
        popAuthArray.push({ name: `${author.name.first} ${author.name.last}`, count: book.borrows.length, });
      }
    });
  });
  return popAuthArray.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
