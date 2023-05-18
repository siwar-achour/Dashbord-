const router = require("express").Router();
const  pinController = require('../controllers/pinController');

 router.post("/",pinController.pin_create);
 router.get("/",pinController.pin_all);
 router.get("/:pinId",pinController.pin_details);
 router.put("/:pinId",pinController.pin_update);
 router.delete("/:pinId",pinController.pin_delete);


module.exports =router;