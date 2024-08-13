const express = require("express");
const router = express.Router();
const reserveController = require("../controllers/reserve-controller");
const auth = require("../middelwares/auth")



//router.get("/:id", reserveController.getDoctor);

router.get("/",   reserveController.getReserves);

// router.use(auth)
router.post("/", reserveController.insertReserve);

// router.put("/:id", reserveController.updateDoctor);

//  router.delete("/:id", reserveController.deleteDoctor);

module.exports = router;