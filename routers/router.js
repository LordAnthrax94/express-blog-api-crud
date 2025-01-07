const express = require('express')

const router = express.Router()

const postsController = require('../controllers/controller')

router.get('/', postsController.index)

router.get('/:id', postsController.show)

router.destroy('/:id', postsController.destroy)

module.exports= router