// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    var db = client.db('TodoApp');
   if (err) {
       return console.log('Unable to connect MongoDb');
   }
   console.log('Connecting to Mongodb');

//   deleteMany
  
//   db.collection('Todos').deleteMany({text: 'Deleted'}).then((result) => {
//     console.log(result);
//   });

//   deleteOne

//   db.collection('Todos').deleteOne({text: 'First to do'}).then((result) => {
//     console.log(result);
//   });

//   findOneAndDelete


  db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    console.log(result);
  });
  
   client.close();
});