var expres = require("express");
var app = expres();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Sebec Lake", image: "https://thumbs.trulia-cdn.com/pictures/thumbs_3/ps.103/1/8/c/8/picture-uh=fdfc9526e40e9269b42b5673e6b916-ps=18c8254075326586be98d6a1f4b9f78b.jpg"},
  {name: "Lillian Lake Loop", image: "https://gabelopez.files.wordpress.com/2008/09/lillianlake.jpg?w=640"},
  {name: "Pine Crest Lake", image: "https://www.mymotherlode.com/wp-content/uploads/2014/01/1706919-BID-pinecrest3.jpg"}
];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", function(req, res) {
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  //redirect back to campgrounds page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(3000, function(){
  console.log("the yelpcamp server has started")
});
