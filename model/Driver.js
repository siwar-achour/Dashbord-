const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true,
    },
    lastname:{
        type:String,
        
    },
    firstname:{
        type:String,
    
    },
    phone:{
        type:Number,
       
    },
    documents:{
        type:String
    },
    vehiculeId:{
        type:Number,
        unique:true,
       
    },
    status:{
        type:Boolean
    }
   

});
module.exports = mongoose.model('Driver',driverSchema);