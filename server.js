const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.static(__dirname + "/dist/pan-arab-task"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/pan-arab-task/index.html"));
});
console.log("");
// Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log("http://localhost:8080");
});
