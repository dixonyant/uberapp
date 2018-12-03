'use strict'

var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.usersGET = function (args, res, next) {
  User.find({}, function (err, users) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(users));
    }
  });
}

exports.userIdGET = function (args, res, next) {
  User.findById(args.params.id).exec(function (err, user) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(user));
    }
  });
}

exports.userGET = function (args, res, next) {
  console.log(args.params);
  User.find({ username: args.params.user }).exec(function (err, user) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(user));
    }
  });
}

exports.userPOST = function(args, res, next) {
  var data = args.body;
  var user = new User({
    username:data.username,
    password:data.password,
    userType:data.userType,
  });

  user.save(function(err) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(user));
    }
  });
}

exports.userPUT = function(args, res, next) {
  var data = args.body;
  var user = {
    username:data.username,
    password:data.password,
    userType:data.userType,
  };

  user.findByIdAndUpdate(data.id, function(err) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(user));
    }
  });
}