const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  res.send("<h1>Hello, Here is HomePage which is Html from Express!</h1>");
});
module.exports = router;
