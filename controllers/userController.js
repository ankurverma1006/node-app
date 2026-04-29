<think>
Okay, let's see. The user provided a Node.js code snippet that needs fixing. The main issue is on line 4: there's an unnecessary null check for the userId. The problem says that the route requires an ID parameter, so userId can't be null. So I need to remove the check where it says if (userId == null) and the corresponding response.

Looking at the original code, the getUser function gets the userId from req.params.id. Then there's an if statement checking if userId is null. But since the route requires the ID parameter, Express should ensure that req.params.id is present. So that check is redundant. Removing that block should fix the bug.

So the fixed code would just take the userId, and directly send the JSON response without checking for null. The rest of the code can stay the same. Let me make sure there are no other issues. The original code's structure is okay, so after removing the if block, the code should work as intended.
</think>

exports.getUser = (req, res) => {
  const userId = req.params.id;

  res.json({
    id: userId,
    name: "Ankur"
  });
};