const http = require("http");
const url = require("url");
const fs = require("fs");

const port = 3000;
const hostname = "127.0.0.1";

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    const pages = ["./index.html", "./about.html", "./contact-me.html"];

    if (pages.indexOf(filename) !== -1) {
      fs.readFile(filename, function (err, data) {
        // if (err) throw new Error;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("404.html", function (err, data) {
        if (err) throw Error;
        
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/index.html`);
  });
