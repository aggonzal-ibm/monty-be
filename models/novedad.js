const db = require('../config/config');

const Novedad = {};

Novedad.create = (novedad, result) => {

    const sql = `
    INSERT INTO
        novedad(
            idEstado,
            createdBy,
            name,
            description,
            image1,
            image2,
            created_at,
            updated_at   
        )
    VALUES(?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql, 
        [   novedad.idEstado,
            novedad.createdBy,
            novedad.name,
            novedad.description,
            novedad.image1,
            novedad.image2,
            new Date(),
            new Date(),
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id de la nueva Novedad:', res.insertId);
                result(null, res.insertId);
            }
        }

    )

}



Novedad.update = (novedad, result) => {

    const sql = `
      UPDATE
         novedad
      SET
      name        = ?,
      description = ?,
      image1      = ?,
      image2      = ?,
      idEstado   = ?,
      updated_at  = ?
      WHERE 
      id          = ?
    `;

    db.query(
        sql, 
        [
            novedad.name,
            novedad.description,
            novedad.image1,
            novedad.image2,
            novedad.id_estado,
            new Date(),
            novedad.id
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id de la  Novedad actualizada:', res.insertId);
                result(null, res.insertId);
            }
        }

    )

}


Novedad.deleteById = (id, result) => {

    const sql = `
      DELETE 
      FROM
         novedad
      WHERE
      id          = ?
    `;

    db.query(
        sql, 
        [
        id
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id de la  Novedad BORRADA:', res.deleteId);
                result(null, res.insertId);
            }
        }

    )

}



Novedad.findByNameAndId = (name,createdBy, result) => {
    const sql = `
    SELECT
        CONVERT(N.id, char) AS id,
        N.name,
        N.description,
        N.image1,
        N.image2,
        E.name  AS descEstado
    FROM
        novedad as N , estado as E
    WHERE 
        N.idEstado = E.id and 
        N.createdBy = ? and 
        LOWER(N.name) LIKE ?
    `;

    db.query(
        sql,
        [
          createdBy,
          `%${name.toLowerCase()}%`
        
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id de la nuevo novedad:', res);
                result(null, res);
            }
        }
    );
}

Novedad.findById = (createdBy, result) => {
    const sql = `
    SELECT
        CONVERT(N.id, char) AS id,
        N.name,
        N.description,
        N.image1,
        N.image2,
        E.name  AS descEstado
    FROM
        novedad as N , estado as E
    WHERE 
        N.idEstado = E.id and 
        N.createdBy = ?
    ORDER BY N.created_at desc
    `;

    db.query(
        sql,
        [createdBy],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id de la nuevo novedad:', res);
                result(null, res);
            }
        }
    );
}

module.exports = Novedad;