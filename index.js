const express = require('express');
const app = express();

app.get(
    '/',
    (req,res) => {
        res.send(
            {hi : 'Chetan'}
        );
    }
);

const port = process.env.PORT || 5000;
app.listen(
    port,
    () => console.log(`Server up and running on port ${port} !`)
);