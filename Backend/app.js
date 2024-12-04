const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors')
const express = require('express')
const app = express();
const connectToDb = require('./DB/Db');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser')


connectToDb();
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use(cookieParser());
app.get('/' , (req,res)=>{
    res.send("Hello World")
});

app.use(express.json());
app.use('/users',userRoutes);

module.exports = app