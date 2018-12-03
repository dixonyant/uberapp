'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();
//var http = require('http');
var fs = require('fs');
var mongoose = require('./mongoose');
var serverPort = 8080;

mongoose.loadModels();
mongoose.connect();

var driverCtrl = require('./controllers/Driver'), 
    requestCtrl = require('./controllers/Request'),
    riderCtrl = require('./controllers/Rider'),
    userCtrl = require('./controllers/User');
  
    app.use(bodyParser.json());

  app.listen(serverPort);
    app.get('/driver/:id', function (req, res){
      driverCtrl.driverGET(req, res);
    });
    
    app.get('/driver', function (req, res){
      driverCtrl.driversGET(req, res);
    });
    
    app.post('/driver', function (req, res){
      driverCtrl.driverPOST(req, res);
    });
    
    app.get('/request/:id', function (req, res){
      requestCtrl.requestGET(req, res);
    });
    
    app.get('/request', function (req, res){
      requestCtrl.requestsGET(req, res);
    });
    
    app.post('/request', function (req, res){
      requestCtrl.requestPOST(req, res);
    });
    
    app.put('/request', function (req, res){
      requestCtrl.requestPUT(req, res);
    });
    
    app.get('/rider/:id', function (req, res){
      riderCtrl.riderGET(req, res);
    });
    
    app.get('/rider', function (req, res){
      riderCtrl.ridersGET(req, res);
    });
    
    app.post('/rider', function (req, res){
      riderCtrl.riderPOST(req, res);
    });
    
    app.put('/rider', function (req, res){
      riderCtrl.riderPUT(req, res);
    });
    
    
    app.get('/user/user/:user', function (req, res){
      userCtrl.userGET(req, res);
    });

    app.get('/user/id/:id', function (req, res){
      userCtrl.userIdGET(req, res);
    });

    
    app.get('/user', function (req, res){
      userCtrl.usersGET(req, res);
    });
    
    app.post('/user', function (req, res){
      console.log(req.body);
      userCtrl.userPOST(req, res);
    });
    
    app.put('/user', function (req, res){
      userCtrl.userPUT(req, res);
    });