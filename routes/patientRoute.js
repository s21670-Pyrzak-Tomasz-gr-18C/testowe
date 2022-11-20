const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
router.get('/', patientController.showPatientsList);
router.get('/add', patientController.showAddPatientForm);
router.get('/details/:patientId', patientController.showPatientDetails);


module.exports = router;