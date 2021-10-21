const express = require('express');
const path = require("path");


const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));


app.get(
    '/',
    (req,res) => {
        res.render("index");
    }
);




const port = process.env.PORT || 5000;
app.listen(
    port,
    () => console.log(`Server up and running on port ${port} !`)
);