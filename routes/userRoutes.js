const usersController = require ('../controllers/userControllers');
const passport = require('passport');


module.exports = (app,upload)=>{

  // Get obtener datos
  // Post alamcenar datos
  // Put actualizar datos
  // delete eliminar datos 


  app.post('/api/users/create', usersController.register);
  app.post('/api/users/createWithImage', upload.array('image', 1),   usersController.registerWithImage);
  app.post('/api/users/login', usersController.login);

  
  app.post('/api/users/updateWithImage',passport.authenticate('jwt', {session:false}),upload.array('image', 1),usersController.updateWithImage);
  app.put('/api/users/updateWithOutImage',passport.authenticate('jwt', {session:false}),usersController.updateWithOutImage);



  
}