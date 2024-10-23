class Book {
    constructor(title, genre, author, read = false, readDate = null) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}

class BookList {
    constructor() {
        this.books = [];
        this.currentBook = null;
        this.nextBook = null;
        this.lastBook = null;
    }

    // Añadir un libro a la lista
    add(book) {
        this.books.push(book);
        if (!this.currentBook) {
            this.currentBook = book;
        }
        if (!this.nextBook && !book.read) {
            this.nextBook = book;
        }
    }

    // Método para marcar el libro actual como leído
    finishCurrentBook() {
        if (this.currentBook) {
            this.currentBook.read = true;
            this.currentBook.readDate = new Date(Date.now());
            this.lastBook = this.currentBook;

            // Encuentra el siguiente libro no leído
            this.nextBook = this.books.find(book => !book.read);
            this.currentBook = this.nextBook;
        } else {
            console.log("No current book to finish.");
        }
    }

    // Métodos útiles adicionales
    getReadBooksCount() {
        return this.books.filter(book => book.read).length;
    }

    getUnreadBooksCount() {
        return this.books.filter(book => !book.read).length;
    }

    // Imprime el estado del libro actual, siguiente y último
    printStatus() {
        console.log(`Current Book: ${this.currentBook ? this.currentBook.title : "None"}`);
        console.log(`Next Book: ${this.nextBook ? this.nextBook.title : "None"}`);
        console.log(`Last Book Read: ${this.lastBook ? this.lastBook.title : "None"}`);
        console.log(`Total Books: ${this.books.length}`);
        console.log(`Books Read: ${this.getReadBooksCount()}`);
        console.log(`Books Not Read: ${this.getUnreadBooksCount()}`);
    }
}

// Ejemplo de uso
let myBookList = new BookList();

let book1 = new Book("Padre Rico, Padre Pobre", "Personal Finance", "Robert Kiyosaki");
let book2 = new Book("Billonaire", "EmprenBooks", "José Elías Navarro");
let book3 = new Book("Harry Potter and the Philosopher's Stone", "Fantasy", "J.K. Rowling");

myBookList.add(book1);
myBookList.add(book2);
myBookList.add(book3);

myBookList.printStatus(); 
myBookList.finishCurrentBook(book1); 
myBookList.printStatus(); 
myBookList.finishCurrentBook(book2); 
myBookList.printStatus(); 