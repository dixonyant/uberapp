'use strict'

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RequestSchema = new Schema({
  eta:String,
  pickup:String,
  destination:String,
  riderUID: {
    type: Schema.Types.ObjectId,
    ref: 'Rider'
  },
  driverUID: {
    type: Schema.Types.ObjectId,
    ref: 'Driver'
  },
  time:String,
  status: {
    type:String,
    enum: ['Requested', 'InProgress', 'Completed']
  }
});

mongoose.model('Request', RequestSchema);