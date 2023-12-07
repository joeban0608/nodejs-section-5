// const http = require("http");
const express = require("express");
const app = express();
app.use("/", (req, res, next) => {
  console.log("In the fst middleware!");
  next();
});
app.use("/product", (req, res, next) => {
  console.log("In the another_1 middleware!");
  res.send("<h1>Here is product page</h1>");
});
app.use("/", (req, res, next) => {
  console.log("In the another_2 middleware!");
  res.send("<h1>Hello, Here is Html from Express!</h1>");
});

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);
