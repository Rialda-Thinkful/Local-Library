function findAccountById(accounts, id) {
  for(let i=0; i <accounts.length; i++) {
    if (accounts[i].id===id) {
      return accounts[i];
    }
  }
  return null;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => 
  (accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
   );
 return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  books.forEach(book => {
    const borrowedById = borrowsById(book, account);
    count += borrowedById.length;
  });
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = books.filter(book => book.borrows.some(borrow => borrow.id === account.id && ! borrow.returned));
  borrowedBooks.forEach(book => {
    const author = authors.find(author => author.id === book.authorId);
    book.author = author;
  });
  return borrowedBooks;
}

function borrowsById (book, {id}) {
  return book.borrows.filter(borrow => borrow.id === id);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
