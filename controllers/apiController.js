// controllers/apiController.js
exports.apiHome = (req, res) => {
    res.send('Welcome to the API subroute!');
};
  
exports.getUsers = (req, res) => {
res.json({ users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] });
};
