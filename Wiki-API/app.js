// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("express");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true, useUnifiedTopology: true}); //connect to mongo database and create blogDb

const articleSchema = { //creates schema for article documents
  title: String,
  content: String
};

const Article = new mongoose.model("Article", articleSchema); //creates collection named
///////////////////////////////////
//Request Targeting all articles//
/////////////////////////////////
app.route("/articles")
 .get(function(req, res){
   Article.find({}, function (err, foundArticles){// searches for all articles
     if(err){
       res.send(err);
     }else{
       res.send(foundArticles);
         }
       })})
 .post(function(req,res){
   const newArticle = new Article({
     title: req.body.title,
     content: req.body.content
   });
   newArticle.save(function(err){
     if(err){
       console.log(err);
     }else{
       res.send("Successfully added a new article.");
     }
   });
  })
  .delete(function(req,res){
    Article.deleteMany({},function(err){ //deletes all of the documents in speicified collection
      if(err){
        res.send(err);
            }else{
        res.send("Successfully deleted all articles.");
      }
    })
  });
/////////////////////////////////////////
//Requests Targeting Specific Articles//
///////////////////////////////////////
app.route("/articles/:articleTitle")

  .get(function(req, res){
    const title = req.params.articleTitle;
    Article.findOne({title: title}, function(err, foundArticle){
      if(!foundArticle){
        res.send("No articles matching that title were found.");
      }else{
        res.send(foundArticle);
      }
    });
  })
  .put(function(req, res){
    Article.update({title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      {overwrite: true},
      function(err, updatedArticle){
      if(err){
        res.send(err);
      }else{
        res.send("Successfully updated article.");
      }
    });
  })
  .patch(function(req,res){
    Article.update(
      {title: req.params.articleTitle},
      {$set: req.body },
      function(err){
        if(err){
          res.send(err);
        }else{
          res.send("Successfully updated article.");
        }
      })
  })
  .delete(function(req, res){
    Article.deleteOne({title: req.params.articleTitle}, function(err){
      if(err){
        res.send(err);
      }else{
        res.send("Successfully deleted article.");
      }
    })
  });



app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
