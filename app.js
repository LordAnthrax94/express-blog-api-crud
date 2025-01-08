const express = require('express');
const postRouter = require('./routers/postRouter');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
  res.send('I miei post');
})

app.use('/posts', postRouter)

app.listen(port, ()=>{
  console.log('Sono in ascolto sulla porta 3000');  
})