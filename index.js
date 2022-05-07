const express =  require('express');
const app =  express();
const dotenv = require('dotenv');
const mongoose  =  require('mongoose');
const authRoute  =  require('./routes/auth');
const postRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

mongoose.connect( 'mongodb+srv://fiona:fiona@cluster0.6zhup.mongodb.net/database?retryWrites=true&w=majority')
 .then(()=>console.log('connected to DB')) .catch(e=>console.log(e));




//connect to DB
// mongoose.connect(
//    'mongodb+srv://nadine:*@N6g?^3Ny@uVmx@cluster0.6zhup.mongodb.net/database?retryWrites=true&w=majority',
// () => console.log('connected to db!')
// );

//Middleware
app.use(express.json());



//Routes Middlewares
app.use('/api/user' , authRoute);
app.use('/api/posts', postRoute);


app.listen(300, () => console.log('Server Up and running'));