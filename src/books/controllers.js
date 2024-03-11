const Book = require("./model");

const createBook = async (req, res) => {
    try {
        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            price: req.body.price,
        });
        res.status(201).json({
            message: `Successfully created ${book.title}`,
            book: book,
        });
    } catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

const readBook = async (req, res) => {
    try {
        const books = await Book.findAll();
        const bookCount = await Book.count();
        if (bookCount === 0) {
            res.status(201).json({ message: "No books in DB" });
        } else {
            res.status(201).json({
                message: "All books in DB",
                books: books,
            });
        }
    } catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

const getBookByAuthor = async (req, res) => {
    try {
        const books = await Book.findAll({
            where: { author: req.params.author },
        });
        res.status(201).json({
            Message: `All books by ${req.params.author}`,
            books: books,
        });
    } catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

// const updateBook = async (req, res) => {
//     try {
//         const book = await Book.update({ where: {} });
//     } catch (error) {
//         res.status(500).json({ error: error, message: error.message });
//     }
// };

const deleteAllBooks = async (req, res) => {
    try {
        await Book.destroy({
            truncate: true,
        });
        res.status(201).json({ message: "Successfully deleted all books" });
    } catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

const deleteByTitle = async (req, res) => {
    try {
        const book = await Book.destroy({ where: { title: req.params.title } });
        res.status(201).json({ message: `Deleted ${req.params.title}` });
    } catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

module.exports = {
    createBook: createBook,
    readBook: readBook,
    deleteAllBooks: deleteAllBooks,
    getBookByAuthor: getBookByAuthor,
    deleteByTitle: deleteByTitle,
};
