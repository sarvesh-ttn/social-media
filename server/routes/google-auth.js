const router    = require('express').Router();
const passport  = require('passport');
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


router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] })
  );

  router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000' }),
    function(req, res) {
      // Successful authentication, redirect home.
    //   console.log('hello');
    //   console.log(req.user);
      res.redirect('http://localhost:3000/home');
    });

router.get('/logout',(req,res)=>{
    req.session =null;
    req.logOut();
    res.redirect('/')
})

module.exports = router