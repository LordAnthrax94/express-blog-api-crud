const posts = require('../data/posts');

const index = (req, res) =>{
  let listaPost = posts;
  if(req.query.status){
    listaPost = posts.filter(post => post.titolo === req.query.status)
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