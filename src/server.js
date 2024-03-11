const express = require("express");
const app = express();

const Book = require("./books/model");
const bookRouter = require("./books/routes");

const Author = require("./authors/model");
const authorRouter = require("./authors/routes");

require("dotenv").config();
const port = process.env.PORT || 5001;

app.use(express.json());

const syncTables = () => {
    Book.sync();
    Author.sync();

    Author.hasOne(Book);
    Book.belongsTo(Author);
};

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is healthy" });
});

app.use("/books", bookRouter);
app.use("/authors", authorRouter);

app.listen(port, () => {
    syncTables();
    console.log(`Server is running on port ${port}`);
});
