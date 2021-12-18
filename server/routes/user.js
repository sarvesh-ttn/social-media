const router            = require('express').Router();
const userController    = require('../controllers/userController')

router.get('/:id',userController.getUser,userController.getAllUser)
router.put('/:id/addFriend',userController.addUser)

module.exports = router