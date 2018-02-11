// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    var db = client.db('TodoApp');
   if (err) {
       return console.log('Unable to connect MongoDb');
   }
   console.log('Connecting to Mongodb');

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5a806112305da4e2d669d2fb')
//   }, {
//     $set: {
//       completed: true
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a800c533a9410160cbe5212')
  }, {
    $set: {
      Name: 'Himanshu Ranjan'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  
   client.close();
});