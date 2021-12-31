const router         = require('express').Router();
const postController = require('../controllers/postController')

router.post('/create',postController.createPost)
router.put("/like/:id",postController.likePost)
router.get('/getPost/:id',postController.getPost)
router.get('/allPosts/:id',postController.getAllPosts)
router.put('/comment/:id',postController.addComment)
module.exports =  router 