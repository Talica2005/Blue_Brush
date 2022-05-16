require("dotenv").config();
const express = require("express");
const sequelize = require("./database");
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/handling");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
//app.use("*", cors());
app.use(express.json()); //json format
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
// app.use(express.static("./static/"));
// app.use(fileUpload());
app.use("/api", router);

//error handling latest middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate(); //connecting to DB
    await sequelize.sync(); //checks the database state against the database schema
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
