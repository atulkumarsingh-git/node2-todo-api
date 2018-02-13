var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} =  require('./db/mongoose.js');
var {Todo} =  require('./models/todo.js');
var {mongoose} =  require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.listen('3600', () => {
   console.log('Server START >>>> HAVE FUN!!!!');
});

app.post('/todos', (req, res) => {
  var todo = new Todo({
      text: req.body.text
  });

  todo.save().then( (doc) => {
      res.send(doc);
  }, (e) => {
      res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => { 
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
  
    Todo.findById(id).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
  
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
  });

module.exports = {app};