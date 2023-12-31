const path = require("path");
const rootDir = require("../utils/path");

const express = require("express");
const router = express.Router();
const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log("req body:", req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});
exports.routes = router;
exports.products = products;
