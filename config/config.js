const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'mysql://48jfgy6uwofv:pscale_pw_BsBxLasqk3kNH4xsnbz-S_wOmmPUDFxls-I7Dvsne44@vi8o089qy461.us-east-3.psdb.cloud/montydb?ssl={"rejectUnauthorized":true}',
  user:'48jfgy6uwofv',
  password:'pscale_pw_BsBxLasqk3kNH4xsnbz-S_wOmmPUDFxls-I7Dvsne44',
  database:'montydb'  
});

db.connect(function(err){

if(err) throw err;
console.log('Database Conected');
           
});

module.exports= db;
