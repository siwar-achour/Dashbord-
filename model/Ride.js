const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  id:{
    type:String,
    unique:true
  },
    name: {
    type: String,
    required: true
  },
  theoretical_price:{
    type:Number,
  },
  cost: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  
  pickAddress: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  dropAddress: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
  
  }
  
 
});

module.exports = mongoose.model('Ride', rideSchema);
