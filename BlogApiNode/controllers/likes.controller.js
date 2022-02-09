const express = require("express"); // calling Express
const router = express.Router(); // adding the routes.

const mysqlConnection = require("../db/config"); // conecting the database

// setting up the get method and it shows all the likes in the database.
router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM likes", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// setting up the get method and calling the especific like by its id.
router.get("/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(
        "SELECT * FROM likes WHERE idlikes = ?",
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

// setting up the get method and it shows the likes related to an especific blog.
router.get("/blogs/:blogs_idblogs", (req, res) => {
    const { blogs_idblogs } = req.params;
    mysqlConnection.query(
        "SELECT * FROM likes WHERE blogs_idblogs = ?",
        [blogs_idblogs],
        (err, rows, fields) => {
            if (!err) {
                console.log(rows);
                res.json(rows);
            } else {
                console.log(err);
            }
        }
    );
});

// setting up the delete method and the query to delete a like.
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(
        "DELETE FROM likes WHERE idlikes = ?",
        [id],
        (err, rows, fields) => {
            if (!err) {
                res.json({ status: "Like Deleted" });
            } else {
                console.log(err);
            }
        }
    );
});

// setting up the post method and the query to create a new like.
router.post("/", (req, res) => {
    const { created_at, updated_at, user_iduser, blogs_idblogs } = req.body;

    console.log(created_at, updated_at, user_iduser, blogs_idblogs);

    const query = `
INSERT INTO likes (created_at, updated_at, user_iduser, blogs_idblogs) VALUES ('${created_at}', '${updated_at}', '${user_iduser}', '${blogs_idblogs}');
`;

    mysqlConnection.query(
        query,
        [created_at, updated_at, user_iduser, blogs_idblogs],
        (err, rows, fields) => {
            if (!err) {
                res.json({ status: "Like Saved" });
            } else {
                console.log(err);
            }
        }
    );
});

module.exports = router;
/*
{
    "created_at": "1970-01-01",
    "updated_at": "1970-01-02",
    "user_iduser": 2,
    "blogs_idblogs": 3
}
*/
