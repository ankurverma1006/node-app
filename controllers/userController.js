exports.getUser = (req, res) => {
  const userId = req.user.id; // BUG 1: req.user undefined

  if (userId == null) {
    console.log("No user"); // BUG 2: no response returned
  }

  res.json({
    id: userId,
    name: Ankur // BUG 3: missing quotes
  });
};