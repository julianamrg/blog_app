const express = require("express"); // calling Express
const router = express.Router(); // adding the routes.

const mysqlConnection = require("../db/config"); // conecting the database

// setting up the get method and calling all the blogs.
router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM blogs", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// setting up the get method and calling the especific blog by its id.
router.get("/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(
        "SELECT * FROM blogs WHERE idblogs = ?",
        [id],
        (err, rows, fields) => {
            if (!err) {
                res.json(rows[0]);
            } else {
                console.log(err);
            }
        }
    );
});

// setting up the delete method and the query to delete a blog.
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(
        "DELETE FROM blogs WHERE idblogs = ?",
        [id],
        (err, rows, fields) => {
            if (!err) {
                res.json({ status: "blog Deleted" });
            } else {
                console.log(err);
            }
        }
    );
});

// setting up the post method and the query to create a new blog.
router.post("/", (req, res) => {
    const { title, content, image, created_at, updated_at, user_iduser } =
        req.body;

    console.log(title, content, image, created_at, updated_at, user_iduser);

    // query
    const query = `
INSERT INTO blogs (title, content, image, created_at, updated_at, user_iduser) VALUES ('${title}', '${content}', '${image}', '${created_at}', '${updated_at}', '${user_iduser}');
`;

    //sending the data to the server to wait the response
    mysqlConnection.query(
        query,
        [title, content, image, created_at, updated_at, user_iduser],
        (err, rows, fields) => {
            if (!err) {
                res.json({ status: "blog Saved" });
            } else {
                console.log(err);
            }
        }
    );
});

// Method put to edit and update the blog information
router.put("/:id", (req, res) => {
    const { title, content, image } = req.body;
    const { id } = req.params;
    const query = `
UPDATE blogs 
SET 
title = '${title}',
content = '${content}',
image = '${image}'

 WHERE (idblogs = '${id}');

`;
    mysqlConnection.query(
        query,
        [title, content, image],
        (err, rows, fields) => {
            if (!err) {
                res.json({ status: "blog Updated" });
            } else {
                console.log(err);
            }
        }
    );
});

module.exports = router;
