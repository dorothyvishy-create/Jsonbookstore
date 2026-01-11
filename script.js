let books = [
  {"title": "Book One", "author": "Author A", "year": 2020, "genre": "Fiction"},
  {"title": "Book Two", "author": "Author B", "year": 2018, "genre": "Mystery"},
  {"title": "Book Three", "author": "Author C", "year": 2022, "genre": "Science"}
];

function displayBooks() {
  let table = document.getElementById('bookTable');
  table.innerHTML = '<tr><th>Title</th><th>Author</th><th>Year</th><th>Genre</th></tr>';
  books.forEach(book => {
    let row = table.insertRow();
    row.insertCell(0).innerText = book.title;
    row.insertCell(1).innerText = book.author;
    row.insertCell(2).innerText = book.year;
    row.insertCell(3).innerText = book.genre;
  });
}
