import express from 'express'
import mongoose from 'mongoose';
import swaggerDocs from './swagger.js';
import cors from 'cors';
import endpoint from './routes/student-api.js';
// set up our express app
const app = express();


// connect to mongodb
mongoose.connect('mongodb://0.0.0.0:27017/schooldb');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
// initialize routes
app.use('/api',endpoint);
//app.use('/api',require('./routes/employer-api'));
//app.use('/api',require('./routes/jobseeker-api'));



// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    swaggerDocs(app, 4000);
    console.log('Ready to Go!');
    console.log('Your server is running at --->> http://localhost:4000');
    console.log('You can see Swagger documentation --->> http://localhost:4000/docs');
});