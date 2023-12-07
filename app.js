const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="product_name" placeholder="please input product name">
        <button type="submit">Add Product</button>
      </input>
    </form>
  `);
});
app.post("/product", (req, res, next) => {
  console.log("req body:", req.body);
  const { product_name } = req.body;
  console.log("productName", product_name);
  if (product_name) {
    res.send(
      `
        <h1>Here is product page</h1>
        <h2>Add some product:</h2>
        <p>${product_name}</p>
      `
    );
  } else
    res.send(
      `
      <h1>Here is product page</h1>
      <h2>product is empty</h2>
    `
    );
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello, Here is Html from Express!</h1>");
});

app.listen(3000);
