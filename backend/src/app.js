const express =
    require('express');

const cors =
    require('cors');

const reporteRoutes =
    require('./routes/reporte.routes');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use(
    '/api/reporte',
    reporteRoutes
);

module.exports = app;