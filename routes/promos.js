const router = require("express").Router();
const promoController = require('../controllers/promoController');

router.post("/", promoController.promo_create);
router.get("/", promoController.promo_all);
router.get("/:id", promoController.promo_details);
router.put("/:id", promoController.promo_update);
router.delete("/:id", promoController.promo_delete);

module.exports = router;
