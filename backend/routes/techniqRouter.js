const Router = require("express");
const router = new Router();
const techniqController = require("../controllers/techniqController");

router.post("/", techniqController.create);
router.get("/", techniqController.getAll);

module.exports = router;
