require("dotenv").config();
const express = require("express");
const sequelize = require("./database");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json()); //json format
app.use("/api", router);

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
