const userservice = require('../services/userServices')
const signup = async (req, res) => {
    const result = await userservice.signup(req.body);
    res.status(400).json(result);
};
const login = async (req, res) => {
    const result = await userservice.login(req.body);
    res.status(400).json(result);
};
module.exports = { signup, login}

