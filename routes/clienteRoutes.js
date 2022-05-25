const clienteController = require ('../controllers/clienteControllers');


module.exports = (app)=>{

  // Get obtener datos
  // Post alamcenar datos
  // Put actualizar datos
  // delete eliminar datos 


  app.get('/api/clientes/consultaClientes', clienteController.getAll);


  
}