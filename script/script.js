// Initialize the library array to store book objects
const library = [];

// 1. Function to add a new book
function addBook() {
    const title = prompt("Enter the book title:");
    if (!title) return; // Exit if user cancels or leaves it empty

    const author = prompt("Enter the author's name:");
    if (!author) return;

    const isReadInput = prompt("Have you read this book? (yes/no):").toLowerCase();
    const isRead = isReadInput === "yes" || isReadInput === "y";

    // Create the book object
    const newBook = {
        title: title,
        author: author,
        isRead: isRead
    };

    // Use push() to add the book to the library array
    library.push(newBook);
    alert(`"${title}" has been successfully added to your library!`);
}

// 2. Function to list all books
function listBooks() {
    if (library.length === 0) {
        console.log("Your library is currently empty.");
        alert("Your library is empty. Use the console to view the output.");
        return;
    }

    console.log("--- Current Library ---");
    // Use forEach() to iterate through and display every book
    library.forEach((book, index) => {
        const status = book.isRead ? "Read" : "Unread";
        console.log(`${index + 1}. "${book.title}" by ${book.author} [Status: ${status}]`);
    });
    alert("The book list has been printed to the console! Press F12 to view it.");
}

// 3. Function to mark a book as read
function markAsRead() {
    const searchTitle = prompt("Enter the exact title of the book you want to mark as read:");
    if (!searchTitle) return;

    // Use find() to locate the book by its title (case-insensitive)
    const book = library.find(b => b.title.toLowerCase() === searchTitle.toLowerCase());

    if (book) {
        book.isRead = true;
        alert(`"${book.title}" is now marked as Read!`);
    } else {
        alert(`Could not find a book titled "${searchTitle}".`);
    }
}

// BONUS: Function to remove a book
function removeBook() {
    const searchTitle = prompt("Enter the exact title of the book you want to remove:");
    if (!searchTitle) return;

    // Find the index of the book
    const index = library.findIndex(b => b.title.toLowerCase() === searchTitle.toLowerCase());

    if (index !== -1) {
        const removed = library.splice(index, 1);
        alert(`"${removed[0].title}" has been removed from your library.`);
    } else {
        alert(`Could not find a book titled "${searchTitle}".`);
    }
}

// BONUS: Function to list only unread books
function listUnreadBooks() {
    // Use filter() to isolate unread books
    const unreadBooks = library.filter(book => !book.isRead);

    if (unreadBooks.length === 0) {
        console.log("You have no unread books!");
        alert("No unread books found.");
        return;
    }

    console.log("--- Unread Books ---");
    unreadBooks.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" by ${book.author}`);
    });
    alert("Unread books have been printed to the console!");
}

// --- Menu Simulation Loop ---
function startApp() {
    let running = true;

    while (running) {
        const choice = prompt(
            "--- Personal Library Menu ---\n" +
            "1. Add a Book\n" +
            "2. List All Books (Console)\n" +
            "3. Mark a Book as Read\n" +
            "4. Remove a Book (Bonus)\n" +
            "5. List Unread Books (Bonus)\n" +
            "6. Exit\n\n" +
            "Choose an option (1-6):"
        );

        switch (choice) {
            case "1":
                addBook();
                break;
            case "2":
                listBooks();
                break;
            case "3":
                markAsRead();
                break;
            case "4":
                removeBook();
                break;
            case "5":
                listUnreadBooks();
                break;
            case "6":
            case null: // Handles clicking 'Cancel'
                running = false;
                alert("Goodbye! Happy reading.");
                break;
            default:
                alert("Invalid option. Please enter a number from 1 to 6.");
        }
    }
}

// Start the application
startApp();
