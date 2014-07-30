var express = require('express'),
db = require('./models/index.js'),
bodyParser = require('body-parser'),
app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}) );

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  db.post.findAll().success(function(posts) {
      res.render('site/index');
  })
});
app.get("/about", function(req, res){
  db.post.findAll().success(function(posts) {
      res.render('site/about');
  })
});

app.get("/contact", function(req, res){
  db.post.findAll().success(function(posts) {
      res.render('site/contact');
  })
});

app.get("/posts", function(req, res){
  db.post.findAll().success(function(posts) {
      res.render('post/index', {posts: posts});
  })
});

app.get("/authors", function(req, res){
  db.author.findAll().success(function(authors) {
      res.render('author/index', {authors: authors});
  })
});

app.get("/posts/new", function(req, res){
  res.render("post/new");
});


app.get("/posts/:id", function(req,res){
  db.post.find(req.params.id).success(function(post) {
    res.render('post/show', {post: post});
  });
});

app.get("/authors/:id", function(req,res){
  var id = req.params.id;
  db.author.find(id)
  .success(function(foundAuthor){
    foundAuthor.getPosts()
    .success(function(foundPosts){
      res.render("author/show", {
        author: foundAuthor,
        posts: foundPosts 
      })
    })
  })
});

app.get('/authors/:id/new', function(req, res){
  var id = req.params.id;
  db.author.find(id)
  .success(function(foundAuthor){
    res.render("post/new", {
      author: foundAuthor
    });
  });
});

app.post('/authors/:id/new', function(req, res){
  var id = req.params.id;
  db.author.find(id).success(function(foundAuthor){
    // create the post
    console.log(foundAuthor)
    console.log(req.body.post);

    db.post.create(req.body.post)
    .success(function(newPost){
      // add it to the associations
      foundAuthor.addPost(newPost)
      .success(function(){
        // redirect after a successful association
        res.redirect("/posts/" + newPost.dataValues.id);
      })
    })
  })
  .error(function(err){
    res.redirect("/authors");
  })
});



app.listen(3000,function(){
  console.log("Server running on 3000");
});