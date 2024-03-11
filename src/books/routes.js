const { Router } = require("express");
const bookRouter = Router();

const {
    createBook,
    readBook,
    deleteAllBooks,
    getBookByAuthor,
    deleteByTitle,
} = require("./controllers");

bookRouter.post("/create-books", createBook);
bookRouter.get("/read-books", readBook);
bookRouter.get("/get-book-by-author/:author", getBookByAuthor);
// bookRouter.put("/update-books", updateBook);
bookRouter.delete("/delete-all-books", deleteAllBooks);
bookRouter.delete("/delete-book-by-title/:title", deleteByTitle);

module.exports = bookRouter;
