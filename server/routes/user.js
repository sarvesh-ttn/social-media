const router            = require('express').Router();
const userController    = require('../controllers/userController')

router.get('/',userController.getUser)
// dummy api
router.get('/getAll',userController.getAllUser)
// dummy api to add users to database for testing purpose don't use unless needed
router.post('/create',userController.createUser)
router.get('/profile/:id',userController.singleUser);
// api to show logged user friends
router.get('/friends/:id',userController.getFriends)
router.put('/profile/addFriend/:id',userController.addUser)
router.put('/profile/acceptFriend/:id',userController.acceptUserRequest)

module.exports = router