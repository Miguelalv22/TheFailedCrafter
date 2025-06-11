const express = require("express");
const app = express();
const ejsMate = require('ejs-mate')
const path = require('path')

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("homepage/index.ejs")
})

app.get("/sculptures", (req, res) => {
    res.render("sculptures/index")
})


app.listen(3000, () => {
    console.log("listening por 3000")
})