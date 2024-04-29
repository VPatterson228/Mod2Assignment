// JSON data representing books
let booksData = {
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            price: 10.99,
            pages: 336,
            released: "1960-07-11"
        },
        {
            title: "Harry Potter and the Philosopher's Stone",
            author: "J.K. Rowling",
            price: 12.99,
            pages: 352,
            released: "1997-06-26"
        },
        {
            title: "1984",
            author: "George Orwell",
            price: 9.99,
            pages: 328,
            released: "1949-06-08"
        }
    ]
};

const table = document.getElementById("bookTable");


// Loop over each book in the books array
for ( i = 0; i<booksData.books.length; i++) {
    const row = document.createElement('tr');

    // Create table cells and populate them with book data
    const titleCell = document.createElement('td');
    titleCell.textContent = booksData.books[i].title;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = booksData.books[i].author;
    row.appendChild(authorCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = booksData.books[i].price;
    row.appendChild(priceCell);

    const pagesCell = document.createElement('td');
    pagesCell.textContent = booksData.books[i].pages;
    row.appendChild(pagesCell);

    const releasedCell = document.createElement('td');
    releasedCell.textContent = booksData.books[i].released;
    row.appendChild(releasedCell);

    // Append the row to the table body
    table.appendChild(row);
}

