const storeController = require('../controllers/postController');
const express = require('express');
const router = express.Router();

router.post('/data', storeController.postData);
router.get('/data', storeController.getData);

module.exports = router;