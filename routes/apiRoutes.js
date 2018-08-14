var db = require("../models");

module.exports = function(app) {
  // Get all examples

app.post("/api/username/profile/userinfo", function(req, res){
  db.Post.create({
    name: req.body.name,
    age: req.body.name,
    weight: req.body.weight,
    calorieGoal: req.body.calorieGoal,
    calories: req.body.calories})
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

app.get("/api/username/profile/userinfo", function(req, res){
  db.Profile.findAll({where: {
    username: req.params.username
  }
})
    .then(function(dbProfile) {
      res.json(dbProfile);
    });
});


  
};