// Used models
const User = require("./../models/Users");

// Login controller
const login = async (req, res) => {
  try {
    // Get user
    const { username, password } = req.body;
    const user = await User.findUser(username);
    if (!user) {
      res.status(400).json("Wrong credentials!");
      return;
    }

    // Validate password
    const validate = await user.validatePassword(password);
    if (!validate) {
      res.status(400).json("Wrong credentials!");
      return;
    }

    // Response without password
    const { password: passwordSchema, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Register controller
const register = async (req, res) => {
  try {
    // Create user
    const { username, password, email } = req.body;
    const newUser = new User({
      username,
      password,
      email,
    });

    // Encrypt password
    const newPassword = await User.encryptPassword(password);
    newUser.password = newPassword;

    // Save user
    const user = await newUser.save();

    // Response
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Export controllers
module.exports = {
  register,
  login,
};
