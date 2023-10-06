const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const authController = require('../../controllers/security/auth.controller');

dotenv.config();

router.post('/login', authController.login);
router.get('/validate-token', authController.validateActiveJWT);

module.exports = router;
