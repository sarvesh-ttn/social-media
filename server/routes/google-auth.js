const router    = require('express').Router();
const passport  = require('passport');
const cors      = require('cors')
require('../passport-setup');


// middleware
const isLoggedIn =(req,res,next)=>{
    if(req.user){
        next()
    }
    else{
        res.sendStatus(401);
    }
}
router.use(cors({
    origin:'http://localhost:3000',
}))
router.get('/',(req,res)=>{
    res.send('not logged in')
})
router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] })
  );

  router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      console.log('hello');
      console.log(req.user);
      res.redirect('http://localhost:3000/test');
    });

router.get('/failed',(req,res)=>{
    res.send('failed to login')
})

router.get('/success',isLoggedIn,(req,res)=>{
    res.send(`successfully logged in mr ${req.user.displayName}`)
})


router.get('/logout',(req,res)=>{
    req.session =null;
    req.logOut();
    res.redirect('/')
})

module.exports = router