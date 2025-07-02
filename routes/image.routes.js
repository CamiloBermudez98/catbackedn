const express = require('express');
const router = express.Router();
const controller = require('../controllers/image.controller');

router.get('/imagesbybreedid', controller.getImagesByBreedId);

module.exports = router;
