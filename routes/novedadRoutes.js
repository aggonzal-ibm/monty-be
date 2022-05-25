const novedadController = require('../controllers/novedadController');
const passport = require('passport');

module.exports = (app,upload) => {

    // GET -> OBTENER DATOS
    // POST -> ALMACENAR DATOS
    // PUT -> ACTUALIZAR DATOS
    // DELETE -> ELIMINAR DATOS

    app.post('/api/novedad/create',  passport.authenticate('jwt', { session: false }),upload.array('image',1) ,novedadController.create);
    app.get('/api/novedad/findById/:createdBy',  passport.authenticate('jwt', { session: false }), novedadController.findById);
  app.get('/api/novedad/deleteById/:id',  passport.authenticate('jwt', { session: false }), novedadController.deleteById);
    app.get('/api/novedad/findByNameAndId/:createdBy/:name',  passport.authenticate('jwt', { session: false }), novedadController.findByNameAndId);
  


  
  


}