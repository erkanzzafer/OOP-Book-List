class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author; this.isbn;
    }
}


class UI {
    addBookToList(book) {
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.autor}</td>
        <td>${book.isbn}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete">X</a></td>`;
        list.appendChild(row);
    }


    showAlert(message, className) {
        const div = document.createElement("div");

        //Add className
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");

        //Get Form
        const form = document.querySelector("#book-form");

        //insert alert
        container.insertBefore(div, form);

        //timeout after 3 sec
        setTimeout(function () {
            document.querySelector(".alert").remove();
        },2000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}



//Event Listening
document.getElementById('book-form').addEventListener('submit', function (e) {


    //Get form Values

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;


    //Instantiate Book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();


    //validate,
    if (title === '' || author === '' || isbn === '') {


        //error alert
        ui.showAlert("Please Fill in all fields", 'error');
    } else {

        //add book to list

        ui.addBookToList(book);
        ui.showAlert("Book Added", 'success');
        ui.clearFields();
    }

    e.preventDefault();
});