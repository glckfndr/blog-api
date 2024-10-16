const { User } = require("../models");
const signup = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res
      .status(201)
      .json({
        code: 201,
        status: true,
        message: `User ${name} created successfully`,
      });
  } catch (error) {
    next(error);
  }
};

const authController = { signup };
module.exports = authController;
