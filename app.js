const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// express app
const app = express();

// connect to mongoDB
// const dbURI =
//   "mongodb+srv://Vinayak:/Vinayak@123>@cluster0.t5j3vdl.mongodb.net/";
// mongoose
//   .connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });
// mongoose.connect(dbURI);

// register view engine
app.set("view engie", "ejs");

// listen for requests
app.listen(3000);

// app.use((req, res, next) => {
//   console.log("new request made");
//   console.log("host", req.hostname);
//   console.log("path", req.path);
//   console.log("method", req.method);
//   // to move on to the next line after req.use
//   next();
// });

app.use(morgan("dev"));

app.get("/", (req, res) => {
  // res.send("<p>Home</p>");
  // res.sendFile("./views/index.html", { root: __dirname });
  const blogs = [
    { title: "title 1", desc: "desc 1" },
    { title: "title 2", desc: "desc 2" },
    { title: "title 3", desc: "desc 3" },
  ];
  res.render("index.ejs", { title: "Home", blogs: blogs });
});

app.get("/blogs/create", (req, res) => {
  res.render("create.ejs", { title: "Post Blogs" });
});

// app.get("/about", (req, res) => {
//   res.sendFile("./views/about.html", { root: __dirname });
// });

// redirect
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// 404 error page (should be only declared after all the declaration of the routes)
app.use((req, res) => {
  res.status(404).render("404.ejs", { title: "404" });
});
