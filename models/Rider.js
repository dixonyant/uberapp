'use strict'

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RiderSchema = new Schema({
  userId:{
    type:String,
    index: {
      unique: true
    }
  },
  firstName:String,
  lastName:String,
  card: {
    vendor:String,
    cardNumber:String,
    ccv:Number,
    expDate:String
  }
});

mongoose.model('Rider', RiderSchema);