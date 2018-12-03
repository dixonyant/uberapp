'use strict';

var chalk = require('chalk'),
    models = require('./config/models').server.models,
    path = require('path'),
    mongoose = require('mongoose');

module.exports.loadModels = function (callback) {
  console.log('loading models');
  models.forEach(function (modelPath) {
    require(path.resolve(modelPath));
  });

  if (callback) callback();
};

module.exports.connect = function (cb) {
  var _this = this;

  var db = mongoose.connect('mongodb://localhost:27017/UberDB', { useMongoClient : true }, function(err) {
    if (err) {
      console.error(chalk.red('Could not connect to MongoDB!'));
      console.log(err);
    } else {
      mongoose.Promise = global.Promise;
      if (cb) cb(db);
    }
  });
};

module.exports.disconnect = function (cb) {
  mongoose.disconnect(function (err) {
    console.info(chalk.yellow('Disconnedtec from MongoDB'));
    cb(err);
  });
};
