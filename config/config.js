const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'bqks27iw4wrbzemn73ot-mysql.services.clever-cloud.com',
  user:'u6ntptrtg3vlx7vu',
  password:'QYyvRel4Z8ilROO2TKNI',
  database:'bqks27iw4wrbzemn73ot'  
});

db.connect(function(err){

if(err) throw err;
console.log('Database Conected');
           
});

module.exports= db;