function findAccountById(accounts, id) {
  return accountsId = accounts.find((accounts) => accounts.id === id);
}

function sortAccountsByLastName(accounts) {
  return accountsLastName = accounts.sort((accountA, accountB) => (accountA.name.last < accountB.name.last ? -1 : 1));
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].id === account.id) {
        total++;
      }
    }
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksAccount = [];
  let matchingBorrow = [];
  books.forEach((key) => {
   const borrowed = key.borrows;
   const book = {
     id: key.id,
     title: key.title,
     genre: key.genre,
     authorId: key.authorId,
     author: {},
     borrows: {},
   }
   const {id, title, genre, authorId, author, borrows} = book;
   borrowed.forEach((borrow) => {
     if (borrow.id === account.id && borrow.returned === false) {
       booksAccount.push(book);
       matchingBorrow.push(borrow);
       book.borrows = matchingBorrow;
       book.author = authors.filter((auth) => auth.id === book.authorId)[0]
     };
   });
  });
  return booksAccount;
};
  

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
