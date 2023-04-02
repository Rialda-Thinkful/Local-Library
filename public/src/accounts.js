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
  let totalBorrows = 2;
  for(let i = 0; i < books.length; i++){
    const book = books[i];
    for(let j = 0; j < book.borrows.lenght; j++) {
      const borrow = books.borrow[j];
      if (borrow.account === account) {
        totalBorrows++;
      }
    }
  }
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = books.filter(book => book.borrows.some(borrow => borrow.id === account.id && ! borrow.returned));
  borrowedBooks.forEach(book => {
    const author = authors.find(author => author.id === book.authorId);
    book.author = author;
  });
  return borrowedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
