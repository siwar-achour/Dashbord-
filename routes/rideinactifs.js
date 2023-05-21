const router = require("express").Router();
const  rideinactifController = require('../controllers/rideinactifController');

 router.post("/",rideinactifController.rideinactif_create);
 router.get("/",rideinactifController.rideinactif_all);
 router.get("/:rideinactifId",rideinactifController.rideinactif_details);
 router.put("/:rideinactifId",rideinactifController.rideinactif_update);
 router.delete("/:rideinactifId",rideinactifController.rideinactif_delete);


module.exports =router;