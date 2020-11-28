const MongoClient = require('mongodb').MongoClient; //requires mongodb
const assert = require('assert'); //assert is used for testing validates data entry and connection to db

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, {useUnifiedTopology: true}); //connects to mango db database

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
findDocuments(db, function(){
  client.close();
});
});
const insertDocuments = function(db, callback){
const collection = db.collection('fruits'); //creates fruits collection
collection.insertMany([ //adds documents to collection
  {name: "Apple",
   score: 10,
   review: "Great taste, nice crunch and over 80% water"
 },
  {name: "Orange",
   score: 6,
   review: "Good taste, weird squishy feel, good source of vitamin c"
 },
  {name: "Banana",
   score: 8,
   review: "Good taste, comes with its own packaging, helps with cramps"
 }
], function(err, result) { //for validation
  assert.equal(err, null);//validate to make sure there were no errors when documents were inserted
  assert.equal(3, result.result.n);//validate that there are three results in collection
  assert.equal(3, result.ops.length);//validate that there are three results in collection
  console.log("Inserted 3 documents into the collection");
  callback(result);
});
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {//saves database to array
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)//returns object from find function
    callback(fruits);
  });
}
