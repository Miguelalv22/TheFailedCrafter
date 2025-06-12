const express = require("express");
const app = express();
const ejsMate = require('ejs-mate')
const path = require('path')

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("homepage/index.ejs")
})

app.get("/figurines", (req, res) => {
    res.render("figurines/index")
})

app.get("/cosplay", (req, res) => {
    res.render("cosplay/index")
})

app.get("/props", (req, res) => {
    res.render("props/index")
})

app.listen(3000, () => {
    console.log("listening por 3000")
})