const mongoose = require("mongoose");

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://amitdanino28:SH0T2E0TtoJpkqsJ@cluster.z22w4wc.mongodb.net/LoggingWebsite?retryWrites=true&w=majority&appName=Cluster",
    {}
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
