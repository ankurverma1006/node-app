<think>
Okay, let me look at the problem again. The user wants me to fix the port number in the axios.post URL from 8000 to 3000. The original code has a line where it's making a POST request to "http://localhost:8000/fix". The app is listening on port 3000, so the correct URL should be "http://localhost:3000/fix".

I need to find that line in the code. The app.get("/fix") route is where the axios.post is called. The URL there is definitely using port 8000. Changing that to 3000 should fix the issue. Let me make sure there are no other instances of 8000 in the code. The app.listen is correctly set to 3000. The rest of the code seems okay. So the only change needed is in the axios.post URL. I'll replace 8000 with 3000 there.
</think>

const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const userRoutes = require("./routes/user");
app.use("/users", userRoutes);

// Trigger AI fix manually
app.get("/fix", async (req, res) => {
  try {
    await axios.post("http://localhost:3000/fix", {
      file: "controllers/userController.js",
      query: "Fix bug in this controller"
    });
    res.send("AI Fix Triggered");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error triggering AI fix");
  }
});

app.listen(3000, () => {
  console.log("Node app running on 3000");
});