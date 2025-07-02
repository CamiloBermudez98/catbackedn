const express = require('express');
const router = express.Router();
const controller = require('../controllers/cat.controller');

router.get('/breeds/search', controller.searchBreeds);
router.get('/breeds/:breed_id', controller.getBreedById);
router.get('/breeds', controller.getBreeds);

module.exports = router;
