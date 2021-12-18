const router         = require('express').Router();
const postController = require('../controllers/postController')

router.post('/create',postController.createPost)
router.put("/:id/like",postController.likePost)
router.get('/:id',postController.getPost)
router.put('/:id/comment',postController.addComment)
module.exports =  router 