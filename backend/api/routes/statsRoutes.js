const express = require("express");
const router = express.Router();
const statsController = require("../controllers/statsController");

router.post("/addStats", statsController.addStats);
router.get("/getStats", statsController.getStats);
router.post("/removeStats", statsController.removeStats);

module.exports = router;
