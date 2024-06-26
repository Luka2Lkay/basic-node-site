const express = require("express");
const path = require("path");
const app = express();
const { readFile } = require("fs").promises;

app.use(express.static(path.join(__dirname, "public")));
app.use(async (req, res) => {
  res.status(404).send(await readFile("404.html", "utf8"));
});

const port = 8080;
const hostname = "localhost";

app.listen(port, hostname, () => {
  console.log(`The server is running on http://${hostname}:${port}`);
});
