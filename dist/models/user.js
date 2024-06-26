"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);