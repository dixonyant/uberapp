'use strict'

var mongoose = require('mongoose'),
Rider = mongoose.model('Rider');

exports.ridersGET = function (args, res, next) {
  Rider.find({}, function (err, riders) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(riders));
    }
  });
}

exports.riderGET = function (args, res, next) {
  Rider.find({userId:args.params.id}).exec(function (err, rider) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(rider));
    }
  });
}

exports.riderPOST = function(args, res, next) {
  var data = args.body;
  var rider = new Rider({
    userId:data.userId,
    firstName:data.firstName,
    lastName:data.lastName,
    card: {
      vendor:data.card.vendor,
      cardNumber:data.card.cardNumber,
      ccv:data.card.ccv,
      expDate:data.card.expDate
    }
  });

  rider.save(function(err) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(rider));
    }
  });
}

exports.riderPUT = function(args, res, next) {
  var data = args.body.rider;
  console.log(data);
  var rider = {
    userId:data.userId,
    firstName:data.firstName,
    lastName:data.lastName,
    card: {
      vendor:data.card.vendor,
      cardNumber:data.card.cardNumber,
      ccv:data.card.ccv,
      expDate:data.card.expDate
    }
  };

  rider.findByIdAndUpdate(data.id, function(err) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(rider));
    }
  });
}