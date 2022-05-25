const Novedad = require('../models/novedad');
const storage = require('../utils/cloud_storage');
const asyncForEach = require('../utils/async_foreach');

module.exports = {

    
     async deleteById(req, res) {

       const id = req.params.id;

           Novedad.deleteById(id, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al moment de borrar la novedad',
                    error: err
                });
            }

            return res.status(201).json(data);
        });



     },

  
      async findByNameAndId(req, res) {
        const createdBy = req.params.createdBy;
        const name      = req.params.name;

      console.log(req.params);

        Novedad.findByNameAndId(name,createdBy, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de listar las novedades',
                    error: err
                });
            }

            return res.status(201).json(data);
        });
    },

    async findById(req, res) {
        const createdBy = req.params.createdBy;

      console.log(req.params);

        Novedad.findById(createdBy, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error al momento de listar las novedades',
                    error: err
                });
            }

            return res.status(201).json(data);
        });
    },

    async create(req, res) {

        const novedad = JSON.parse(req.body.novedad);
        const files = req.files;

        if (files.length > 0) {
            const path = `image_${Date.now()}`;
            const url = await storage(files[0], path);

            if (url != undefined && url != null) {
                novedad.image1 = url;
                novedad.image2 = url;
            }
        }
  
       Novedad.create(novedad, (err, id_novedad) =>  {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del novedad',
                    error: err
                });
            }  

           novedad.id = id_novedad;
        });
                      
     
          
       Novedad.update(novedad,(err,data)=>{
              
              if (err) {
                  return res.status(501).json({
                  success: false,
                  message: 'Hubo un error con el registro del novedad',
                  error: err
              });
            }
         
            return res.status(201).json({
                success: true,
                message: 'La novedad se almacen ocorrectamente',
                data: data
            }); 
                          
       });
    },



 

      
}