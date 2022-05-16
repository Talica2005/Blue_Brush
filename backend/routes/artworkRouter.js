const Router = require("express");
const router = new Router();
const artworkController = require("../controllers/artworkController");

router.post("/", artworkController.create);
router.get("/", artworkController.getAll);
router.get("/:id", artworkController.getOne); //to get separate work

module.exports = router;
