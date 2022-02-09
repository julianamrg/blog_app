const express = require("express");
const cors = require("cors");
//const morgan = require("morgan");

// With this constant we invocate express

const { usersApi, blogApi, likesApi } = require("./controllers/index");

// With this constant we create the server
const app = express();

// Settings

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log("server On Port ", app.get("port"));
});

//Middleware
app.use(cors());
app.use(express.json()); // app will serve and receive data in a JSON format
//app.use(morgan("dev"));

// Routes
app.use("/api/users", usersApi);
app.use("/api/blogs", blogApi);
app.use("/api/likes", likesApi);
