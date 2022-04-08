const Router = require("express");
const router = new Router();

router.post("/");
router.get("/");
router.get("/:id"); //to get separate work

module.exports = router;
