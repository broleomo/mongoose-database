const MongoClient = require('mongodb').MongoClient;
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/catsdb');
const Cats = require('./models/cats')
const mustacheExpress = require('mustache-express')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine('mustache',mustacheExpress());
app.set('views','./views');
app.set('view engine','mustache');

app.get('/',(req,res)=> {
  res.render('main', cats);
});

app.get('/',function(req,res){
  MongoClient.connect(url)
  .then(function(db){
    return db.collection("cats")
    .find().toArray(
      function(err,doc){
        console.log(doc);
        res.render("cats",{cats: doc})
        db.close();
      }
    )
  })
});

app.post('/new',function(req,res){
  cats.insert({name:req.body.name});
});

let cats = new Cats ({name: "Fluffy", color: 'grey'});
cats.save()
.then(function(){
  db.cats.insertOne(cats);
})
.catch(function(){
  console.log("Not valid entry");
});
// console.log(cats.toObject());

app.listen(3000, function(){
  console.log("This is running correctly");
});
