const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../public/swagger_output.json');

var options = {
    explorer: true
};

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile, options));

module.exports = router;