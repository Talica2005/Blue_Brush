const errorApi = require("../error/error_api");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Cart } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body; //request body, telo zaprosa
    if (!email || !password) {
      return next(errorApi.badRequest("Inaccurate email or password")); //if the email and password are empty, then return an error to client
    }
    const candidate = await User.findOne({ where: { email } }); //check if a user with this email exists in the system
    if (candidate) {
      return next(errorApi.badRequest("User with this email already exists"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const cart = await Cart.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res) {}

  async check(req, res, next) {
    //the logic of issuing the database to the client
    // get query string parameters
    const { id } = req.query;
    if (!id) {
      return next(errorApi.badRequest("No ID"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
