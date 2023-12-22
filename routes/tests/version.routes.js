const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const versionController = require('../../controllers/tests/version.controller');

const router = express.Router();

router.post('/version', authenticateToken, versionController.create);
router.put('/version/:id', authenticateToken, versionController.update);
router.get('/version', authenticateToken, versionController.findAll);
router.get('/version/by-id/:id', authenticateToken, versionController.findById);
router.get('/version/full-by-id/:id', authenticateToken, versionController.findFullById);

module.exports = router;