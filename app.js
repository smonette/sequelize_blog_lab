var express = require('express'),
db = require('./models/index.js'),
app = express();

app.set('view engine', 'ejs');


app.get("/", function(req, res){
  db.post.findAll().success(function(posts) {
      res.render('index', {posts: posts});
  })
});


app.get("/posts", function(req, res){
  db.post.findAll().success(function(posts) {
      res.render('index', {posts: posts});
  })
});


app.get("/posts/new", function(req, res){
  res.render("new")
});


app.get("/posts/:id", function(req,res){
  db.post.find(req.params.id).success(function(post) {
    res.render('show', {post: post});
  });
});



app.listen(3000,function(){
  console.log("Server running on 3000");
});