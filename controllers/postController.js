const posts = require('../data/posts');

const index = (req, res) =>{
  console.log(req.query)
  let listaPost = posts;
  if(req.query.title){
    listaPost = posts.filter(post => post.title === req.query.title)
  }
  res.json(listaPost)
}

const show = (req, res) =>{
  const post = posts.find(post => post.id == req.params.id)

  if(!post){
    res.status(404)
    return res.json({
      message: 'post inesistente, prova un altro dolce',
      status: 404,
      error:'not found'
    })
  }
  res.json(post)
}

const store = (req, res) =>{
  const id = posts.at(-1).id +1;
  console.log( id);
  

  const newPost = {
    id,
    ...req.body
  }

  posts.push(newPost)

  res.status(201)
  res.json(posts)
}

const update = (req, res) =>{
  const id = req.params.id
  const post = posts.find(post => post.id == id);

  if(!post){
    res.status(404)
    return res.json ({
      message: 'post inesistente, prova un altro dolce',
      staut: 404,
      error: 'not found'
    })
  };

  for(let key in req.body){
    post[key] = req.body[body]
  }
  res.json(post)
}

const modify = (req, res) =>{
  const id = req.params.id
  const post = posts.find(post => post.id == id);

  if(!post){
    res.status(404)
    return res.json ({
      message: 'post inesistente, prova un altro dolce',
      staut: 404,
      error: 'not found'
    })
  };

  for(let key in req.body){
    post[key] = req.body[body]
  }
  res.json(post)
}


const destroy = (req, res) =>{
  const post = posts.find(post => post.id == req.params.id)
  if(!post){
    res.status(404)
    return res.json({
      message: 'post inesistente, prova un altro dolce',
      status: 404,
      error:'not found'
    })
  }
  posts.splice(posts.indexOf(post), 1)
  res.status(200)
  return res.json({
    message: 'Eliminazione completata',
    status: 200    
  })
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,  
  destroy
}