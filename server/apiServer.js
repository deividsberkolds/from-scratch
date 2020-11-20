const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 3001;

let data = fs.readFileSync(path.resolve(__dirname, "db.json"));
let { courses, authors } = JSON.parse(data);

app.listen(port, () => {
  console.log('Yeey, I"m running');
});

app.get("/", (req, res) => {
  res.send("Hello My Friends and Welcome");
});

app.get("/getBooks", (req, res) => {
  res.json(["Deivids", "Berkolds", "First", "JSON Server"]);
});

app.get("/authors", (req, res) => {
  res.json(authors);
});
