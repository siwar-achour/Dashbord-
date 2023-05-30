const router = require("express").Router();
const  clientController = require('../controllers/clientController');

 router.post("/",clientController.client_create);
 router.get("/",clientController.client_all);
 router.get("/:clientId",clientController.client_details);
 router.put("/:clientId",clientController.client_update);
 router.delete("/:clientId",clientController.client_delete);


module.exports =router;