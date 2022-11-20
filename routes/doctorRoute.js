const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
router.get('/', doctorController.showDoctorsList);
router.get('/add', doctorController.showAddDoctorForm);
router.get('/details/:doctorId', doctorController.showDoctorDetails);

router.get('/', function(reg,res,next) {
    res.render('index', { navLocation: 'doc'});
  });

router.get('/doctorAdded', doctorController.showDoctorAddedMessage);

module.exports = router;