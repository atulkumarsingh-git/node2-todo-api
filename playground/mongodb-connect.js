// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    var db = client.db('TodoApp');
   if (err) {
       return console.log('Unable to connect MongoDb');
   }
   console.log('Connecting to Mongodb');

//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//     // console.log('Data instered');
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });

  db.collection('Users').insertOne({
    Name: 'Indrajeet Kumar',
    age: 26,
    location: 'Delhi'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log('Data instered');
    // console.log(JSON.stringify(result.ops, undefined, 2));
    // console.log(JSON.stringify(result.ops[o]._id));
  });


   client.close();
});