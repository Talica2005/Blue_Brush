const { Techniq } = require("../models/models");
const errorApi = require("../error/error_api");

class TechniqController {
  async create(req, res) {
    const { name } = req.body;
    const techniq = await Techniq.create({ name });
    return res.json(techniq);
  }

  async getAll(req, res) {
    const techniques = await Techniq.findAll();
    return res.json(techniques);
  }
}

module.exports = new TechniqController();
