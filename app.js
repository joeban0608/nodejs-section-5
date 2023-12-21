const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminModule = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorRoute = require("./routes/404");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminModule.routes);
app.use(shopRoute);
app.use(errorRoute);

app.listen(3000);
