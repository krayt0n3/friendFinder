

var friendsList = require("../data/friends");





module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });


  app.post("/api/friends", function(req, res) {
   
    
      friendsList.push(req.body);
      console.log(friendsList.scores);
      res.json(true);
    
  });

  

  app.post("/api/clear", function(req, res) {
    
    friendsList.length = 0;
  

    res.json({ ok: true });
  });
};
