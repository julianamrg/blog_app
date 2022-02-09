const usersApi = require("./user.controller"); // calling the user controller
const blogApi = require("./blog.controller"); // calling the blog controller
const likesApi = require("./likes.controller"); // calling the likes controller

module.exports = { usersApi, blogApi, likesApi }; // exporting the modules
