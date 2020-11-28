const mongoose = require('mongoose'); //requires mongodb
const assert = require('assert'); //assert is used for testing validates data entry and connection to db
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});//conects to server and looks for fruitsDB creates if there isnt one

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please specify a name."]
  },
  rating: {
    type:Number,
    min: 1,
    max:10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Kiwi",
  rating: 8,
  review: "Good flavor but too hairy"
});
//fruit.save();

const reviewerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Reviewer = mongoose.model("Reviewer", reviewerSchema);

//reviewer.save();
const grapes = new Fruit({
  name: "grapes",
  rating: 8,
  review: "Loved by ducks"
});
//grapes.save();

/*const reviewer = new Reviewer({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple
});*/
/*Reviewer.updateOne({name: "John"}, {favoriteFruit: grapes}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Document has been updated");
  }
});*/
//reviewer.save();
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});
/*Fruit.updateOne({_id: "5efbb8d9ef89de3b58146f77"},{review: "Good flavor very juicy."}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("successfully updated the document.");
  }
}*/
Fruit.deleteOne({_id: "5efbcd2bbd2db90c2c56f79a"}, function(err, result){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully deleted document");
  }
});
/*Fruit.deleteMany({name: ""}, function(err,result){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully deleted documents.");
  }
});*/
/* const findDocuments = function(db, callback) {
  //Get the documents collection
  const collection = db.collection('fruits');
  //Find some documents
  collection.find({}).toArray(function(err, fruits) {//saves database to array
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)//returns object from find function
    callback(fruits);
  });
}*/
