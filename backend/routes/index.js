const Router = require("express"); //fick router från express
const router = new Router(); //object ov this router
const artworkRouter = require("./artworkRouter");
const userRouter = require("./userRouter");
const techniqRouter = require("./techniqRouter");
const genreRouter = require("./genreRouter");

router.use("/user", userRouter); // /user URL by which the router is processed
router.use("/techniq", techniqRouter);
router.use("/genre", genreRouter);
router.use("/artwork", artworkRouter);

module.exports = router; //export router
