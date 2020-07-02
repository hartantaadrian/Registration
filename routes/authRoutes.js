const express = require('express');

const authControllers  = require('../controllers/auth-controllers')

const router = express.Router();


router.post('/regis', authControllers.registration );




module.exports = router