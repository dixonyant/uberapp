'use strict'

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DriverSchema = new Schema({
  userId:{
    type:String,
    index: {
      unique: true
    }
  },
  firstName:String,
  lastName:String,
  licensePlate:String,
  vehicleType:String
});

mongoose.model('Driver', DriverSchema);