const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitController');
router.get('/', visitController.showVisitsList);
router.get('/add', visitController.showAddVisitForm);
router.get('/details/:visitId', visitController.showVisitDetails);


module.exports = router;