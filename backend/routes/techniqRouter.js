const Router = require("express");
const router = new Router();
const techniqController = require("../controllers/techniqController");
const checkRole = require("../middleware/role_middleware");

router.post("/", checkRole("ADMIN"), techniqController.create);
router.get("/", techniqController.getAll);

module.exports = router;
