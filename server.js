const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 20);
  console.log("num", num);

  const greet = _.once(() => {
    console.log("inside greet function");
  });

  //   due to _.once even if we call greet 2 times, it will only call once
  greet();
  greet();

  //   set header content type
  res.setHeader("Contet-Type", "text/html");
  //   res.write('<p>hello</p>')
  //   res.end();

  //   get page path
  let path = "./views/";
  switch (req.url) {
    case "/":
      path = path + "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path = path + "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path = path + "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on post 3000");
});
