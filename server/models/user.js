var mongoose = require('mongoose');


var User = mongoose.model('User', {
    name:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});


// var newUser = new User({
//     name: '   Atul Singh   ',
//     email: '   atul@gmail.com   '
// });

// newUser.save().then((docs) => {
//     console.log('Save user', docs)
// }, () => {
//    console.log('Unable to save user')
// });

module.exports = {User};

