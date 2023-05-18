const Pin = require('../model/Pin');


//Get All pins
const pin_all= async (req,res)=>{
    try{
        const pins = await Pin.find();
        res.json(pins);
    }catch(error){
        res.json({message:error});
    }

};

//Single pin
const pin_details= async (req,res)=>{
    try{
        const pin = await Pin.findById(req.params.pinId);
        res.json(pin);
    }catch(error){
        res.json({message:error});
    }
};

//Add new pin
const pin_create= async (req,res)=>{
    const pin =new Pin({
        username:req.body.username,
        title : req.body.title,
        ratting : req.body.ratting,
        lat : req.body.lat,
        long: req.body.long,
        Matricule : req.body.Matricule,
        vehiculeId : req.body.vehiculeId,
    });
        try{
            const savedPin = await pin.save();
            res.send(savedPin);
        }catch(error){
            res.json({message:error});
        }
    
};

//Update pin
const pin_update= async (req,res)=>{
    try{
    const pin = {
        username:req.body.username,
        title : req.body.title,
        rating : req.body. rating,
        lat : req.body.lat,
        long: req.body.long,
        Matricule: req.body.Matricule,
        vehiculeId : req.body.vehiculeId,
    };
   
        const updatePin = await Driver.findByIdAndUpdate(
            {_id: req.params.pinId},
            pin
        );
        res.json(updatePin);
    } catch(error){
        res.json({message:error});
    }
};

//Delete pin
const pin_delete= async (req,res)=>{
    try{
            const removePin = await Driver.findByIdAndDelete(req.params.pinId);
            res.json(removePin);
        }catch(error){
            res.json({message:error});
        }
};



module.exports = {
   pin_all,
   pin_details,
   pin_create,
   pin_update,
   pin_delete
}