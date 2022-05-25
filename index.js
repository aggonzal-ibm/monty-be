const express = require('express');
const app = express();
const http = require('http');
const logger = require('morgan');
const cors  = require('cors');
const passport = require('passport');
const multer = require('multer');




//RUTAS// ---
const usersRoutes = require('./routes/userRoutes');
const clientesRoutes = require('./routes/clienteRoutes');
const novedadRoutes = require('./routes/novedadRoutes');


///////

const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({

  extended:true
}));

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.disable('x-powered-by');
app.set('port', port);


const upload = multer({

  storage: multer.memoryStorage()
})
//LLAMADO DE LAS RUTAS 

usersRoutes(app,upload);
clientesRoutes(app);
novedadRoutes(app,upload);


//

server.listen(3000,function(){

console.log("SERVIDOR BACKEND "+process.pid+" Iniciada")
  
});


app.get('/',(req,res) => {

res.send('Ruta raiz del backend');
  
});


app.get('/test',(req,res) => {

res.send('Ruta test');
  
});


//error handler

app.use((err,req,res,next)=>{

  console.log(err);
  res.status(err.status||500).send(err.stack);
  
});


//200 respuesta exitosa
//404 no existe url 
// 500 error interno 