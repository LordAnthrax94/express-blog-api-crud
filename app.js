const express = require('express');
const postRouter = require('./routers/postRouter');
const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound');
const cors = require('cors')



const app = express();
const port = 3000;

app.use(cors({
  origin:['http://localhost:5173', 'http://localhost:5174']
}))

app.use(express.static('public'))

app.use(express.json());

app.get('/', (req, res)=>{
  res.send('I miei post');
});

app.use('/posts', postRouter);

app.use(errorsHandler);

app.use(notFound);

app.listen(port, ()=>{
  console.log('Sono in ascolto sulla porta 3000');  
});