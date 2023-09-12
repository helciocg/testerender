const express = require('express')
const app = express()
const mysql = require('mysql');
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! - Mundo Imoveis - Futuro site')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const productsRoutes=require('./routes/products');
app.use(productsRoutes);
