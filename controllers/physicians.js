var express = require('express');
var router = express.Router();
var Physician = require('../models/')["Physician"];
var Availability = require('../models/')["Availability"];

//list of physicians
router.get('/', function(req, res) {
  Physician.findAll({})
  .then(function(physicians) {
    return res.json({"physicians" : physicians});
  });
});

//physician profile page
router.get('/dr/:urlpath/', function(req, res) {
  //return availabilities
});

//add new physician profile
router.post('/create', auth, function() {
  // first_name: 
  // last_name: 
  // address1: 
  // address2: 
  // city: 
  // state: 
  // zip: 
  // phone_number: 
  // specialty: 
  // url_path: 
});

//
router.put('/update', auth, function() {
  // first_name: 
  // last_name: 
  // address1: 
  // address2: 
  // city: 
  // state: 
  // zip: 
  // phone_number: 
  // specialty: 
  // url_path: 
});

module.exports = router;