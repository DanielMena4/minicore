const express = require('express');

const router =
    express.Router();

const reporteController =
    require(
        '../controllers/reporte.controller'
    );

router.post(
    '/',
    reporteController.obtenerReporte
);

module.exports = router;