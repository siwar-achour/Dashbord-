const Promo = require('../model/Promo');


//Get All promo
const promo_all= async (req,res)=>{
    try{
        const promos = await Promo.find();
        res.json(promos);
    }catch(error){
        res.json({message:error});
    }

};

//Single promo
const promo_details= async (req,res)=>{
    try{
        const promo = await Promo.findById(req.params.promoId);
        res.json(promo);
    }catch(error){
        res.json({message:error});
    }
};

//Add new promo
const promo_create= async (req,res)=>{
    const promo =new Promo({
        id:req.body.id,
        Code_Name:req.body.Code_Name,
        type : req.body.type,
        value:req.body.value,
        Usage_limit : req.body.Usage_limit,
        User_used : req.body.User_used,
        status:req.body.status,
        date:req.body.date,
       
  
      
    });
        try{
            const savedPromo = await promo.save();
            res.send(savedPromo);
        }catch(error){
            res.json({message:error});
        }
    
};


// Update promo
const promo_update = async (req, res) => {
    try {
      const promo = {
        id: req.body.id,
        Code_Name: req.body.Code_Name,
        type: req.body.type,
        value: req.body.value,
        Usage_limit: req.body.Usage_limit,
        User_used: req.body.User_used,
        status: req.body.status,
        date: req.body.date,
      };
  
      const updatePromo = await Promo.findByIdAndUpdate(
        req.params.promoId,
        promo,
        { new: true }
      );
  
      res.json(updatePromo);
    } catch (error) {
      res.json({ message: error });
    }
  };
  
//Delete promo
const promo_delete= async (req,res)=>{
    try{
            const removePromo= await Promo.findByIdAndDelete(req.params.promoId);
            res.json(removePromo);
        }catch(error){
            res.json({message:error});
        }
};



module.exports = {
   promo_all,
   promo_details,
   promo_create,
   promo_update,
   promo_delete
}