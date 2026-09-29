let books = [];

function addBook() {
    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;

    if (bookName === "" || authorName === "") {
        alert("Please enter book name and author name.");
        return;
    }

    books.push({
        name: bookName,
        author: authorName,
        status: "Available"
    });

    displayBooks();

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
}

function displayBooks() {
    let bookList = document.getElementById("bookList");

    bookList.innerHTML = "";

    books.forEach((book, index) => {
        bookList.innerHTML += `
            <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.status}</td>
                <td>
                    <button onclick="issueBook(${index})">Issue</button>
                    <button onclick="returnBook(${index})">Return</button>
                </td>
            </tr>
        `;
    });
}

function issueBook(index) {
    books[index].status = "Issued";
    displayBooks();
}

function returnBook(index) {
    books[index].status = "Available";
    displayBooks();
}
