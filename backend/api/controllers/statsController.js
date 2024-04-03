const UserStats = require("../models/UserStats");

const addStats = async (req, res) => {
  try {
    const { userId, data } = req.body;

    let userStats = await UserStats.findOne({ id: userId });
    if (!userStats) {
      userStats = new UserStats({
        id: userId,
        fields: [],
      });
    }
    userStats.fields.push(data);

    await userStats.save();

    res.status(200).json({ message: "stat added successfully" });
  } catch (error) {
    console.error("Error adding stat:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const removeStats = async (req, res) => {};

const getStats = async (req, res) => {
  try {
    const userId = req.headers.userid;
    const userStats = await UserStats.findOne({ id: userId });
    res.status(200).json({
      message: "stats fetched successfully",
      fields: userStats.fields,
    });
  } catch (error) {
    res.status(500).json({ error: "unable to get stats error!!" });
  }
};
// export { addStats, removeStats };
module.exports = { addStats, removeStats, getStats };
