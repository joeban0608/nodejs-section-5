const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="product_name" placeholder="please input product name">
        <button type="submit">Add Product</button>
      </input>
    </form>
  `);
});

router.post("/product", (req, res, next) => {
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
  } else {
    // res.send(
    //   `
    //     <h1>Here is product page</h1>
    //     <h2>product is empty</h2>
    //   `
    // );
    res.redirect("/");
  }
});
module.exports = router;
