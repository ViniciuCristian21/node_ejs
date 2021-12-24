const express = require('express');

const app = express();

const port = 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/sobre", (req, res) => {
    res.render("about")
})



app.listen(port, console.log(`Server is running in http://localhost:${port}`));