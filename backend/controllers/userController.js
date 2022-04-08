const errorApi = require("../error/error_api");

class UserController {
  async registration(req, res) {}

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
