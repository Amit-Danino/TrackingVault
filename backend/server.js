// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRoutes = require("./api/mainRoutes");
const db = require("./index"); // Import and execute the server setup from server.js

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const PORT = process.env.PORT || 5000;

app.use("/api", mainRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
