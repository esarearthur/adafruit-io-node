'use strict';

const util = require('util'),
      xml = require('xml'),
      model = require('../models/Group');

module.exports.groupsGet = function groupsGet(req, res, next) {

  model.groupsGet()
    .then(function(data) {
      res.format({
        'application/json': function() {
          res.json(data);
        },
        'text/csv': function() {
          res.csv(data);
        },
        'application/xml': function() {
          res.set('Content-Type', 'text/xml');
          res.send(xml(data));
        },
        'text/html': function() {
          res.set('Content-Type', 'application/json');
          res.json(data);
        },
        'default': function() {
          res.set('Content-Type', 'application/json');
          res.json(data);
        }
      });
    }).
    catch(function(err) {
      res.writeHead(500);
      res.end();
    });

};


module.exports.getGroupById = function getGroupById(req, res, next) {

  const id = req.swagger.params['id'].value;

  model.getGroupById(id)
    .then(function(data) {
      res.format({
        'application/json': function() {
          res.json(data);
        },
        'text/csv': function() {
          res.csv(data);
        },
        'application/xml': function() {
          res.set('Content-Type', 'text/xml');
          res.send(xml(data));
        },
        'text/html': function() {
          res.set('Content-Type', 'application/json');
          res.json(data);
        },
        'default': function() {
          res.set('Content-Type', 'application/json');
          res.json(data);
        }
      });
    }).
    catch(function(err) {
      res.writeHead(500);
      res.end();
    });

};
