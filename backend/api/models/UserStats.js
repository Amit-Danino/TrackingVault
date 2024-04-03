const mongoose = require("mongoose");

const userStatsSchema = new mongoose.Schema({
  id: String,
  fields: [
    {
      name: String,
      datatype: String,
    },
  ],
});

module.exports = mongoose.model("UserStats", userStatsSchema, "UserStats");
