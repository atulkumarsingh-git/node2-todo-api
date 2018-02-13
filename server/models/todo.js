var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

// var otherTodo = new Todo({
//     text: 'Cook Dinner',
//     completed: false,
//     completedAt: 1256
// });

// otherTodo.save().then((docs) => {
//     console.log('Save todo', docs)
// }, () => {
//    console.log('Unable to save todo')
// });

module.exports = {Todo};