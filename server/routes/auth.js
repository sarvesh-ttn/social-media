const router = require('express').Router();
const userController    = require('../controllers/userController')

router.get('/',(req,res)=>{
    res.status(200).json('running')
})
router.get('/suggestions/:id',userController.suggestedFriends)
module.exports = router;