const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema({
   
    username:{
        type:String,
        required:true,
        min:2,
        maax:20
    },
    title:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        
       
    },
    lat:{
        type:Number,
        required:true
       
    },
    long:{
        type:Number,
        required:true
       
    },
    Matricule:{
        type:String,
       
    },
    vehiculeId:{
        type:Number,
        required:true,
        unique:true
      
    },
   
},  
);
module.exports = mongoose.model('Pin',pinSchema);