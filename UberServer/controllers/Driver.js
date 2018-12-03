'use strict'

var mongoose = require('mongoose'),
Driver = mongoose.model('Driver');

exports.driversGET = function (args, res, next) {
  Driver.find({}, function (err, drivers) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(drivers));
    }
  });
}

exports.driverGET = function (args, res, next) {
  Driver.find({userId:args.params.id}).exec(function (err, driver) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(driver));
    }
  });
}

exports.driverPOST = function(args, res, next) {
  var data = args.body;
  var driver = new Driver({
    userId:data.userId,
    firstName:data.firstName,
    lastName:data.lastName,
    licensePlate:data.licensePlate,
    vehicleType:data.vehicleType
  });

  driver.save(function(err) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(driver));
    }
  });
}