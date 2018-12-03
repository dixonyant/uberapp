'use strict'

var mongoose = require('mongoose'),
  Request = mongoose.model('Request');

exports.requestsGET = function (args, res, next) {
  Request.find({ status: "Requested" }).populate('riderUID driverUID').exec( function (err, requests) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(requests));
    }
  });
}

exports.requestGET = function (args, res, next) {
  Request.findById(args.params.id).populate('riderUID driverUID').exec(function (err, request) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(request));
    }
  });
}

exports.requestPOST = function (args, res, next) {
  var data = args.body;
  var request = new Request({
    eta: data.eta,
    pickup: data.pickup,
    destination: data.destination,
    riderUID: data.riderUID,
    driverUID: data.driverUID || undefined,
    status: data.status,
    time: data.time
  });

  request.save(function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(request));
    }
  });
}

exports.requestPUT = function (args, res, next) {
  var data = args.body;
  var request = {
    eta: data.eta,
    pickup: data.pickup,
    destination: data.destination,
    riderUID: data.riderUID,
    driverUID: data.driverUID,
    status: data.status,
    time: data.time
  }

  Request.findByIdAndUpdate({_id: data._id}, request, function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(request));
    }
  });
}
