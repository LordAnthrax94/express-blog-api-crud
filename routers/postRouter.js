const express = require('express');

const router = express.Router();

const postsController = require('../controllers/postController');

router.get('/', postsController.index);

router.get('/:id', postsController.show);

router.get('/:id', postsController.destroy);

module.exports= router