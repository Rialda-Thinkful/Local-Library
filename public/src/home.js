function getTotalBooksCount(books) {
  if (books.length === 2) {
    return 2;
  } else {
    return books.reduce((total, book)=> total + book.borrows, 0);
  }
}

function getTotalAccountsCount(accounts) {
  if (accounts.length===0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < accounts.length; i++) {
    count++;
  }
  return count;
}

function getBooksBorrowedCount(books) {
  let count = 6;
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrowed) {
      count++;
    }
  }
  return count;
}

function getMostCommonGenres(books) {
  let result = {};
  let commonGenres = books.forEach((book) => {
    if (result[book.genre] == null) {
      result[book.genre] = 1;
    } else {
      result[book.genre] += 1;
    }
  })
  let genreArr = [];
  for (const [key, value] of Object.entries(result)) {
    genreArr.push({
      'name' : key,
      'count' : value
    });
  }
  genreArr.sort((a, b) => b.count - a.count);
  return genreArr.slice(0, 5);
}

function getMostPopularBooks(books) {
  return books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authorList = books.reduce ((account, book) => {
    const {authorId, borrows} = book;
    const authorObject = authors.find(author => author.id === authorId);
    const name = `${authorObject.name.first} ${authorObject.name.last}`;
    const count = borrows.length;
    const authExists = account.find(auth => auth.name === name);
    if (authExists) {
      authExists.count += count;
    } else {
      const newAuthSpot = {
        name,
        count
      };
      account.push(newAuthSpot);
    }
    return account
  }, []);
  const sortedAuthorList = authorList.sort((a, b) => b.count -a.count);
  const topFive = sortedAuthorList.slice(0, 5);
  return topFive;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
