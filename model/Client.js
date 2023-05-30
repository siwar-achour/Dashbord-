const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    id:{
        type:String,
        unique :true
    },
    lastname:{
        type:String,
       
    },
    firstname:{
        type:String,
   
    },
    age:{
        type:Number,
       
    },
    email:{
        type:String,
       
    },
    


});
module.exports = mongoose.model('Client',clientSchema);