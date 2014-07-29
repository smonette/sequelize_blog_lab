var express = require('express'),
db = require('./models/index.js'),
app = express();

app.set('view engine', 'ejs');





app.listen(3000,function(){
  console.log("Server running on 3000");
});