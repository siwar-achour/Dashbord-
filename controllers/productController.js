const Product = require('../model/Product');


//Get All products
const product_all= async (req,res)=>{
    try{
        const products = await Product.find();
        res.json(products);
    }catch(error){
        res.json({message:error});
    }

};

//Single product
const product_details= async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.json(product);
    }catch(error){
        res.json({message:error});
    }
};

//Add new product
const product_create= async (req,res)=>{
    const product =new Product({
        firstname:req.body.firstname,
        lastname : req.body.lastname,
        age : req.body.age
    });
        try{
            const savedProduct = await product.save();
            res.send(savedProduct);
        }catch(error){
            res.json({message:error});
        }
    
};

//Update product
const product_update= async (req,res)=>{
    try{
    const product = {
        firstname:req.body.firstname,
        lastname : req.body.lastname,
        age : req.body.age
    };
   
        const updateProduct = await Product.findByIdAndUpdate(
            {_id: req.params.id},
            product
        );
        res.json(updateProduct);
    } catch(error){
        res.json({message:error});
    }
};

//Delete product
const product_delete= async (req,res)=>{
    try{
            const removeProduct = await Product.findByIdAndDelete(req.params.id);
            res.json(removeProduct);
        }catch(error){
            res.json({message:error});
        }
};



module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}