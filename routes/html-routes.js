var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/Main.html"));
  });

  app.get("/Menu", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/Menu.html"));
  });

  app.get("/Contact", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/Contact.html"));
  });

};
