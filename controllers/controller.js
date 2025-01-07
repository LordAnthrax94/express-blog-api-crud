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
      message: "post inesistente, prova un altro dolce",
      status: 404,
      error:"kilogram not found"
    })
  }
  res.json(post)
}

const destroy = (req, res) =>{
  const post = posts.find(post => post.id == req.params.id)
  if(!post){
    res.status(404)
    return res.json({
      message: "post inesistente, prova un altro dolce",
      status: 404,
      error:"kilogram not found"
    })
  }
  posts.splice(posts.indexOf(post), 1)
  res.status(204)
}

module.exports = {
  index,
  show,  
  destroy
}