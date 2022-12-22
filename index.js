const express = require("express");
const app = express();
const { readFile } = require("fs").promises;

const port = process.env.PORT || 8080;
const hostname = "0.0.0.0";

app.get("/", async (req, res) => {
  res.send(await readFile("index.html", "utf8"));
});

app.get("/index.html", async (req, res) => {
  res.send(await readFile("index.html", "utf8"));
});

app.get("/about.html", async (req, res) => {
  res.send(await readFile("about.html", "utf8"));
});

app.get("/contact-me.html", async (req, res) => {
  res.send(await readFile("contact-me.html", "utf8"));
});

app.use(async (req, res) => {
  res.status(404).send(await readFile("404.html", "utf8"));
});

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`);
});
