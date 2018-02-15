var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

app.use(express.static("./public"));

require("./routes/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});