const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/user/:username', controller.getUserInfo);
module.exports = router;
