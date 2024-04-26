
const mongoose = require('mongoose');
const mongoUrl='mongodb://localhost:27017/';
const connectToMongo= ()=>{
    mongoose.connect(mongoUrl,()=>{
        console.log("connection succesfully");
    })
}
mongoose.export=connectToMongo ;

