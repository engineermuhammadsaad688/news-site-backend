const User = require('../models/User')
const bcrypt = require('bcryptjs'); // ✅ Use this if bcrypt fails
const jwt = require('jsonwebtoken');

const signup = async (UserData) => {
    const existingUser = await User.findOne({ email: UserData.email });

    if (existingUser) {
        throw new Error('Email already extist')
    }
    const hashedPassword = await bcrypt.hash(UserData.password, 10);

    const user = new User({ ...userData, password: hashedPassword });

    await user.save();

    return user;
};
const login = async(email,password) => {
const user = await User.findOne({ email }); 

if(!user){
throw new Error('Invalid email or password');

}
const token = jwt.sign(
{ id: user._id, email: user.email,role: user.role},
process.env.JWT_SECRET,
{expiresIn: '1d'}


);
return{ token,user };

};

module.exports = {
  signup,
  login
};