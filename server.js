const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const userRoutes = require("./routes/user");
app.use("/users", userRoutes);

// Trigger AI fix manually
app.get("/fix", async (req, res) => {
  await axios.post("http://localhost:8000/fix", {
    file: "controllers/userController.js",
    query: "Fix bug in this controller"
  });

  res.send("AI Fix Triggered");
});

app.listen(3000, () => {
  console.log("Node app running on 3000");
});