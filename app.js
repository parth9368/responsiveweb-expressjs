const path = require("path");
const express = require("express");

const app = express();

const staticpath = (path.join(__dirname, "utils"));

app.use(express.static(staticpath));

app.get("/", (req, res) =>{
    res.send("Hello from express");
});

app.get("/about", (req, res) =>{
    res.send("Hello World from About Page");
});

app.listen(8000, ()=>{
    console.log("listening port no 8000");
});