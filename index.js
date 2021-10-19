const express = require('express');
const mongoose = require("mongoose");

const app = express();

app.get(
    '/',
    (req,res) => {
        res.send(
            {hi : 'Chetan'}
        );
    }
);

const db = require("./config/keys").mongoURI;

mongoose.connect(
    db
).then(
    () => console.log("MongoDB successfully connected")
).catch(err => console.log(err));


const port = process.env.PORT || 5000;
app.listen(
    port,
    () => console.log(`Server up and running on port ${port} !`)
);