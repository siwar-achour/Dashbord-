const mongoose = require('mongoose');

const promoSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true,
    },
    Code_Name:{
        type:String,

        
    },
    type:{
        type:String,
    
    },
    value:{
        type:Number,

       
    },
    Usage_limit:{
        type:Number
    },
    User_used:{
        type:Number,
    },
    status:{
        type:Boolean
    },
    date:{
        type:Date
    }
   

});
module.exports = mongoose.model('Promo',promoSchema);