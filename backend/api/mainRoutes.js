const express = require("express");
const router = express.Router();
const userRoutes = require("./routes/userRoutes");
const statsRoutes = require("./routes/statsRoutes");
router.use("/users", userRoutes);
router.use("/stats", statsRoutes);
module.exports = router;
