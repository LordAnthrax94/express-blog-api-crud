const express = require('express');
const postRouter = require('./routers/router');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('I miei post');
})

app.use('/router', postRouter)

app.listen(port, ()=>{
  console.log('Sono in ascolto sulla porta 3000');  
})