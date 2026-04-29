<think>
Okay, let me look at the problem. The user wants me to fix a bug in their Node.js code. The specific issue is on line 3: there's a missing validation for the required userId parameter. They want me to add a check for when userId is not present and return a 400 error in that case.

Looking at the original code, the getUser function extracts userId from req.params.id. Then it sends a JSON response with that userId. But if req.params.id isn't provided, userId would be undefined. The task is to check if userId is missing and respond with a 400 error.

So, I need to add a condition right after extracting userId. If userId is not present (i.e., !userId), then return a 400 response. Otherwise, proceed to send the JSON.

In Express.js, to send a 400 error, I can use res.status(400).json({ error: 'message' }). So the code would be something like:

if (!userId) {
  return res.status(400).json({ error: 'User ID is required' });
}

I should place this check immediately after extracting the userId. The rest of the code remains the same. Let me make sure that the syntax is correct. Also, the original code uses res.json({ ... }), which is fine when userId is present.

Testing this: if req.params.id is there, it works as before. If not, the if condition triggers the error. That should fix the bug. I don't see any other issues in the original code, so that's the only change needed.
</think>

exports.getUser = (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  res.json({
    id: userId,
    name: "Ankur"
  });
};