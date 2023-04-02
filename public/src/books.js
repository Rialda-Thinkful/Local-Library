function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = [];
  const returnedBooks = [];
  
  books.forEach(book => {
    if (book.borrows.some(borrow => ! borrow.returned)) {
      borrowedBooks.push(book);
    } else {
      returnedBooks.push(book);
    }
  });
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
  let account =  accounts.find((account) => account.id === borrow.id);
return {...borrow, ...account};
}).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
