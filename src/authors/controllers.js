const Author = require("./model");

const postAuthor = async (req, res) => {
    try {
        const author = await Author.create({ name: req.body.name });
        res.status(201).json({
            message: `Added ${req.body.name} to DB`,
            author: author,
        });
    } catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

const getAuthorByName = async (req, res) => {
    try {
        const author = await Author.findOne({
            where: { name: req.params.name },
        });
        res.status(201).json({
            message: `All books by ${req.params.name}`,
            books: "books",
        });
    } catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

module.exports = {
    postAuthor: postAuthor,
    getAuthorByName: getAuthorByName,
};
