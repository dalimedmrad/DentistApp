const { check, validationResult } = require("express-validator");

exports.validationCheck = () => [
  check(
    "firstname",
    "The first name must contain alpha characters only"
  ).isAlpha(),
  check(
    "lastname",
    "The last name must contain alpha characters only"
  ).isAlpha(),
  check("age", "invalid age").isNumeric(),
  check("phone", "Please enter a valid phone number").isNumeric(),
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Your password is too weak").isLength({ min: 6 }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .send({ errors: errors.array().map((el) => ({ msg: el.msg })) });
  }
  next();
};
