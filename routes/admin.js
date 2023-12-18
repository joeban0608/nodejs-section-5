const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(`
    <form action="/admin/add-product" method="POST">
      <input type="text" name="product_name" placeholder="please input product name">
        <button type="submit">Add Product</button>
      </input>
    </form>
  `);
});

router.post("/add-product", (req, res, next) => {
  console.log("req body:", req.body);
  res.redirect("/");
});
module.exports = router;
