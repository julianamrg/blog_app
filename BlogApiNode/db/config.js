const mysql = require("mysql");
// mysql is required in the file

// In this constant we create the connection to the database
const mysqlConnection = mysql.createConnection({
    host: "b206kamhrlk5vvmxeu5r-mysql.services.clever-cloud.com",
    user: "utbf2oj0wk5jgczm",
    password: "T39Q4e0z4EiHW4JiXqas",
    database: "b206kamhrlk5vvmxeu5r",
});

("blogdb");

// It checkes the connection to the database. If it is not connected, it will receive an error message. In the other side, the message id "database connected"

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("database connected");
});

module.exports = mysqlConnection;
