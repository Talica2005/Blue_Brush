const uuid = require("uuid");
const path = require("path");
const { Artwork, ArtworkInfo } = require("../models/models");
const errorApi = require("../error/error_api");

class ArtworkController {
  async create(req, res, next) {
    try {
      let { name, price, techniqId, genreId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const artwork = await Artwork.create({
        name,
        price,
        techniqId,
        genreId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          ArtworkInfo.create({
            title: i.title,
            description: i.description,
            artworkId: artwork.id,
          })
        );
      }

      return res.json(artwork);
    } catch (e) {
      next(errorApi.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { techniqId, genreId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let artworks;
    if (!genreId && !techniqId) {
      artworks = await Artwork.findAndCountAll({ limit, offset }); //total number of artworks
    }
    if (genreId && !techniqId) {
      artworks = await Artwork.findAndCountAll({
        where: { genreId },
        limit,
        offset,
      });
    }
    if (!genreId && techniqId) {
      artworks = await Artwork.findAndCountAll({
        where: { techniqId },
        limit,
        offset,
      });
    }
    if (!genreId && techniqId) {
      artworks = await Artwork.findAndCountAll({
        where: { genreId, techniqId },
        limit,
        offset,
      });
    }

    return res.json(artworks);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const artwork = await Artwork.findOne({
      where: { id },
      include: [{ model: ArtworkInfo, as: "info" }],
    });

    return res.json(artwork);
  }
}

module.exports = new ArtworkController();
