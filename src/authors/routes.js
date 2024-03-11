const { Router } = require("express");
const authorRouter = Router();

const { postAuthor, getAuthorByName } = require("./controllers");

authorRouter.post("/post-author", postAuthor);
authorRouter.get("/get-author-by-name/:name", getAuthorByName);

module.exports = authorRouter;
