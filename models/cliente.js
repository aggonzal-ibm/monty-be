const db = require('../config/config');
const bcrypt = require('bcryptjs');

const Cliente = {};


Cliente.getAll = (result) => {
    const sql = `
    SELECT
        CONVERT(id, char) AS id,
        name,
        lastName,
        email,
       cedula
    FROM
        customers
    ORDER BY
        name
    `;

    db.query(
        sql,
        (err, data) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Clientes:', data);
                result(null, data);
            }
        }
    )
}


module.exports = Cliente;