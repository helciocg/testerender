const { Router } = require('express');
const app = Router();
  
app.get('/products', (req, res) => {
    
    
    require('dotenv').config()
    
    const mysql = require('mysql2')
    //res.send("Produtos do banco de dados...");
    console.log(process.env.DATABASE_URL)
    const connection = mysql.createConnection(process.env.DATABASE_URL)
    console.log('Connected to PlanetScale!')
    
    connection.query('SELECT * FROM products', function(err, rows, fields) {
        //rows.forEach(function(row) {
        //  console.log(row.id + '=> '+ row.name + ', '+ row.price);
        //
        //}
      //);
      res.json(rows);

      console.log('Finish');
      });
    connection.end();
    
});
  
module.exports = app;