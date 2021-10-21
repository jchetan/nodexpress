const express = require('express');
const path = require("path");

// Creating the Express server
const app = express();

// Server configuration
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));

// GET /
app.get(
    '/',
    (req,res) => {
        res.render("index");
    }
);

// GET /about
app.get(
    "/about", 
    (req, res) => {
        res.render("about");
    }
);

// GET /data
app.get(
    "/data", 
    (req, res) => {
        const test = {
            title: "Test",
            items: ["one", "two", "three"]
        };
        res.render("data", { model: test });
    }
);

// Starting the server
const port = process.env.PORT || 5000;
app.listen(
    port,
    () => console.log(`Server up and running on port ${port} !`)
);