var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('movieList2', ['movieList2', 'movietypes']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public")); 
app.use(bodyParser.json());

app.get('/movieList2', function (req, res){
    console.log("I received a GET request")
    
db.movieList2.find(function (err, docs) {
console.log(docs);
res.json(docs);
});
});



app.get('/movietypes/:id', function (req, res) {
var id = req.params.id;
console.log(id);
db.movietypes.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
res.json(doc);
});
});
  
   






app.post('/movieList2', function (req, res) {
   console.log(req.body);
   db.movieList2.insert(req.body, function(err, doc) {
   res.json(doc);
});
});

app.post('/orders', function (req, res) {
   console.log(req.body);
   db.orders.insert(req.body, function(err, doc) {
   res.json(doc);
});
});


app.delete('/movieList2/:id', function (req, res) {
   var id = req.params.id;
   console.log(id);
db.movieList2.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
res.json(doc);
});
});

app.get('/movieList2/:id', function (req, res) {
var id = req.params.id;
console.log(id);
db.movieList2.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
res.json(doc);
});
});

app.put('/movieList2/:id', function (req, res) {
var id = req.params.id;
console.log(req.body.name);
db.movieList2.findAndModify({
query: {_id: mongojs.ObjectId(id)},
update: {$set: {name: req.body.name, price: req.body.price, movietype: req.body.movietype, director: req.body.director, description: req.body.description, imagelink: req.body.imagelink }},
new: true}, function (err, doc) {
res.json(doc);
}
        
);
});

app.post("/confirm", function(req, res){
    db.confirm.insert(req.body, function(err, doc) {
   res.json(doc);
});
});

app.listen(3000);
console.log("Server running on port 3000");