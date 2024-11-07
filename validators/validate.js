const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (Object.keys(errors.errors).length === 0) {
    return next();
  }

  const extractedErrors = {};
  errors.errors.map((error) => (extractedErrors[error.path] = error.msg));

  return res.status(400).json(extractedErrors);
};

module.exports = validate;
