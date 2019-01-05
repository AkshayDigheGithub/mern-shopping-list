const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    email:{
        type:String,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        required:[true, "Email Is Required"]
    },
    password:{
        type:String,
        required: [true, "Passwword Is Required"],
        minlength: [6, "Passwords Must Be At Least 6 Characters!"],
        bcrypt: true
    }    
}); // end UserSchema


UserSchema.plugin(require('mongoose-bcrypt')); // from mongoose-bcrypt docs
module.exports = User = mongoose.model('user', UserSchema);