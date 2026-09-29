function addBook() {

    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;

    if (bookName === "" || authorName === "") {
        alert("Please enter book name and author name");
        return;
    }

    let table = document.getElementById("bookList");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = bookName;
    row.insertCell(1).innerHTML = authorName;
    row.insertCell(2).innerHTML = "Available";

    row.insertCell(3).innerHTML =
        '<button onclick="issueBook(this)">Issue</button>';

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
}

function issueBook(button) {

    let row = button.parentElement.parentElement;

    row.cells[2].innerHTML = "Issued";

    button.innerHTML = "Return";
    button.setAttribute("onclick", "returnBook(this)");
}

function returnBook(button) {

    let row = button.parentElement.parentElement;

    row.cells[2].innerHTML = "Available";

    button.innerHTML = "Issue";
    button.setAttribute("onclick", "issueBook(this)");
}
