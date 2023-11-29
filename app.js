const http = require("http");
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});
app.use((req, res, next) => {
  console.log("In the sec middleware!");
  res.send('<h1>Hello, Here is Html from Express!</h1>')
});

app.listen(3000)
// const server = http.createServer(app);

// server.listen(3000);
