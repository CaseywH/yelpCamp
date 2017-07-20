var expres = require("express");
var app = expres();
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});


app.listen(3000, function(){
  console.log("the yelpcamp server has started")
});
