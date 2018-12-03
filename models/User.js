'use strict'

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type:String,
    index: {
      unique: true
    }
  },
  password:String,
  userType: {
    type:String,
    enum: ['Rider', 'Admin', 'Driver']
  }
});

mongoose.model('User', UserSchema);