var db = require("../models");

module.exports = function(app) {
  // Get all examples

app.post("/api/username/profile/userinfo", function(req, res){
  db.Profile.create({
    name: req.body.name,
    age: req.body.age,
    weight: req.body.weight,
    calorieGoal: req.body.calorieGoal,
    calories: req.body.calories})
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

app.get("/api/username/profile/userinfo/:id", function(req, res){
  db.Profile.findAll(
    {where: {
    name: req.params.id
  }
})
    .then(function(dbProfile) {
      res.json(dbProfile);
    });
});


  
};