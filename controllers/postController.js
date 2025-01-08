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

  const newPost = {
    id,
    ...req.body
  }

  posts.push(newPost)

  res.status(201)
  req.json(posts)
}

const update = (req, res) =>{
  const id = req.params.id
  const posts = posts.find(post => post.id == id);

  if(!post){
    res.status(404)
    return res.json ({
      message: 'post inesistente, prova un altro dolce',
      staut: 404,
      error: 'not found'
    })
  }
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