const reporteModel =
    require('../models/reporte.model');

const obtenerReporte = async (
    req,
    res
) => {

    try {

        const {
            fechaInicio,
            fechaFin
        } = req.body;

        if (
            !fechaInicio ||
            !fechaFin
        ) {

            return res
                .status(400)
                .json({
                    mensaje:
                        'Las fechas son obligatorias'
                });
        }

        const resultado =
            await reporteModel
                .obtenerReporte(
                    fechaInicio,
                    fechaFin
                );

        res.json(resultado);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje:
                'Error interno del servidor'
        });
    }
};

module.exports = {
    obtenerReporte
};