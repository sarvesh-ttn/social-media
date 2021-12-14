const express       = require('express');
const app           = express();
const PORT          = 8000;
const mongoose      = require('mongoose');
const dotenv        = require('dotenv');
const morgan        = require('morgan');
const helmet        = require('helmet')
const userRoute     = require('./routes/users')
const authRoute     = require('./routes/auth')

dotenv.config();
mongoose.connect('mongodb://localhost:27017/social-media',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('connected to database');
})
// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

app.use('/api/users',userRoute)
app.use('/api/auth',authRoute)
app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})