const router = require("express").Router();
const rideController = require('../controllers/rideController');

router.post("/", rideController.ride_create);
router.get("/", rideController.ride_all);
router.get("/:rideId", rideController.ride_details);
router.put("/:rideId", rideController.ride_update);
router.delete("/:rideId", rideController.ride_delete);

module.exports = router;
