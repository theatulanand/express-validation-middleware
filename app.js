const validation = require("./middlewares/validation.js");

const express = require('express');

const app = express();

const PORT = 3030;

app.use(express.json());
app.use(validation);

const movies = [];

app.post("/movie", (req, res) => {
    const { movie } = req.body;

    try {
        movies.push(movie);
        res.send("Added to database")
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

app.get("/movie", (req, res) => {
    res.send(movies);
})

app.listen(PORT, () => {

    console.log(`Server is running at port ${PORT}`);
})