const Client = require('../model/Client');


//Get All clients
const client_all= async (req,res)=>{
    try{
        const clients = await Client.find();
        res.json(clients);
    }catch(error){
        res.json({message:error});
    }

};

//Single client
const client_details= async (req,res)=>{
    try{
        const client = await Client.findById(req.params.clientId);
        res.json(client);
    }catch(error){
        res.json({message:error});
    }
};

//Add new client
const client_create= async (req,res)=>{
    const client =new Client({
        id:req.body.id,
        firstname:req.body.firstname,
        lastname : req.body.lastname,
        age:req.body.age,
        email : req.body.email,
        status : req.body.status,
       
  
      
    });
        try{
            const savedClient = await client.save();
            res.send(savedClient);
        }catch(error){
            res.json({message:error});
        }
    
};

//Update driver
const client_update= async (req,res)=>{
    try{
    const client = {
        id:req.body.id,
        firstname:req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        age:req.body.age,
        status: req.body.status,
       
    };
   
        const updateClient = await Client.findByIdAndUpdate(
            {_id: req.params.clientId},
            client
        );
        res.json(updateClient);
    } catch(error){
        res.json({message:error});
    }
};

//Delete client
const client_delete= async (req,res)=>{
    try{
            const removeClient = await Client.findByIdAndDelete(req.params.clientId);
            res.json(removeClient);
        }catch(error){
            res.json({message:error});
        }
};



module.exports = {
   client_all,
   client_details,
   client_create,
   client_update,
   client_delete
}