const express       = require('express');
const app           = express();
const PORT          = 5000;
const mongoose      = require('mongoose');
const dotenv        = require('dotenv');
const morgan        = require('morgan');
const helmet        = require('helmet')
const cookieSession = require('cookie-session');
const passport      = require('passport')
const userRoute     = require('./routes/users')
const authRoute     = require('./routes/auth')
const googleauth    = require('./routes/google-auth')
dotenv.config();
mongoose.connect('mongodb://localhost:27017/socialbuzzz',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('connected to database');
})
// middleware
app.use(cookieSession({
    name:'buzz-session',
    keys:['key1','key2']
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

app.use('/',googleauth)
app.use('/api/users',userRoute)
app.use('/api/auth',authRoute)

app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})