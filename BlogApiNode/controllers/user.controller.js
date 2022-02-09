const express = require("express"); // calling Express
const router = express.Router(); // adding the routes.

const mysqlConnection = require("../db/config"); // conecting the database

// setting up the get method and calling all the users.
router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM user", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// setting up the get method and calling the especific user by its id.
router.get("/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(
        "SELECT * FROM user WHERE iduser = ?",
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

// setting up the delete method and the query to delete an user.
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(
        "DELETE FROM user WHERE iduser = ?",
        [id],
        (err, rows, fields) => {
            if (!err) {
                res.json({ status: "user Deleted" });
            } else {
                console.log(err);
            }
        }
    );
});

// setting up the post method and the query to create a new user.
router.post("/", (req, res) => {
    const {
        name,
        email,
        email_verified_at,
        password,
        token,
        created_at,
        updated_at,
    } = req.body;
    console.log(
        name,
        email,
        email_verified_at,
        password,
        token,
        created_at,
        updated_at
    );

    const query = `
INSERT INTO user (name, email, email_verified_at, password, token, created_at, updated_at) VALUES ('${name}', '${email}', '${email_verified_at}', '${password}', '${token}', '${created_at}', '${updated_at}');
`;
    //sending the data to the server to wait the response
    mysqlConnection.query(
        query,
        [
            name,
            email,
            email_verified_at,
            password,
            token,
            created_at,
            updated_at,
        ],
        (err) => {
            if (!err) {
                res.json({ status: "user Saved" });
            } else {
                console.log(err);
            }
        }
    );
});

// Method put to edit and update the user information
router.put("/:id", (req, res) => {
    const {
        name,
        email,
        email_verified_at,
        password,
        token,
        created_at,
        updated_at,
    } = req.body;
    const { id } = req.params;
    const query = `
UPDATE user 
SET 
name = '${name}',
email = '${email}',
email_verified_at = '${email_verified_at}',
password = '${password}', token = '${token}, created_at =${created_at}, updated_at = ${updated_at} WHERE (iduser = '${id}');

`;
    mysqlConnection.query(
        query,
        [
            name,
            email,
            email_verified_at,
            password,
            token,
            created_at,
            updated_at,
        ],
        (err, rows, fields) => {
            if (!err) {
                res.json({ status: "user Updated" });
            } else {
                console.log(err);
            }
        }
    );
});

module.exports = router;
