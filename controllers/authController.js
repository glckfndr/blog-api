const { User } = require("../models");
const signup = async (req, res, next) => {
  try {
    //res.code = 201; // set response status code
    //throw new Error("Test error");
    const { name, email, password, role } = req.body;

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({
        code: 400,
        status: false,
        message: `User ${email} already exists`,
      });
    }

    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res.status(201).json({
      code: 201,
      status: true,
      message: `User ${name} registered successfully`,
    });
  } catch (error) {
    next(error);
  }
};

const authController = { signup };
module.exports = authController;
