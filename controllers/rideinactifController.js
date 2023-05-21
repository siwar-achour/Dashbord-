const  Rideinactif = require('../model/Rideinactif');


//Get All pins
const  rideinactif_all= async (req,res)=>{
    try{
        const  rideinactifs = await  Rideinactif.find();
        res.json( rideinactifs);
    }catch(error){
        res.json({message:error});
    }

};

//Single pin
const  rideinactif_details= async (req,res)=>{
    try{
        const  rideinactif = await  Rideinactif.findById(req.params. rideinactifID);
        res.json( rideinactif);
    }catch(error){
        res.json({message:error});
    }
};

//Add new pin
const  rideinactif_create= async (req,res)=>{
    const  rideinactif =new  Rideinactif({
        username:req.body.username,
        title : req.body.title,
        ratting : req.body.ratting,
        lat : req.body.lat,
        long: req.body.long,
        Matricule : req.body.Matricule,
        vehiculeId : req.body.vehiculeId,
    });
        try{
            const savedRideinactif = await  rideinactif.save();
            res.send(savedRideinactif);
        }catch(error){
            res.json({message:error});
        }
    
};

//Update pin
const  rideinactif_update= async (req,res)=>{
    try{
    const  rideinactif = {
        username:req.body.username,
        title : req.body.title,
        rating : req.body. rating,
        lat : req.body.lat,
        long: req.body.long,
        Matricule: req.body.Matricule,
        vehiculeId : req.body.vehiculeId,
    };
   
        const updateRideinactif = await  Rideinactif.findByIdAndUpdate(
            {_id: req.params. rideinactifId},
            pin
        );
        res.json(updateRideinactif);
    } catch(error){
        res.json({message:error});
    }
};

//Delete pin
const  rideinactif_delete= async (req,res)=>{
    try{
            const removeRideinactif = await  Rideinactif.findByIdAndDelete(req.params. rideinactifId);
            res.json(removeRideinactif);
        }catch(error){
            res.json({message:error});
        }
};



module.exports = {
   rideinactif_all,
   rideinactif_details,
   rideinactif_create,
   rideinactif_update,
   rideinactif_delete
}