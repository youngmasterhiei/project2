var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/blog", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("blog", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/blog", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("blog", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/lifestyle", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("lifestyle", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/profile", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("profile", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
