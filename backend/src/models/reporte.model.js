const db = require('../config/db');

const obtenerReporte = async (
    fechaInicio,
    fechaFin
) => {

    const [rows] = await db.execute(
        `
        SELECT
            r.nombre,

            COUNT(e.id_envio)
                AS cantidadEnvios,

            SUM(e.peso_kg)
                AS totalKg,

            GROUP_CONCAT(
                DISTINCT z.nombre_zona
            ) AS zonas,

            ROUND(
                SUM(
                    e.peso_kg *
                    z.tarifa_por_kg
                ),
                2
            ) AS costoTotal

        FROM repartidores r

        INNER JOIN envios e
            ON r.id_repartidor =
               e.id_repartidor

        INNER JOIN zonas z
            ON z.id_zona =
               e.id_zona

        WHERE e.fecha_envio
            BETWEEN ? AND ?

        GROUP BY
            r.id_repartidor,
            r.nombre

        ORDER BY
            costoTotal DESC
        `,
        [fechaInicio, fechaFin]
    );

    return rows;
};

module.exports = {
    obtenerReporte
};