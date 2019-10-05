const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    fname:String,
    lname:String,
    email:String,
    phone: Number,
    city: String,
    state:String,
    zip: Number,
    check:String
    })

module.exports = mongoose.model('user_tables', UserSchema)