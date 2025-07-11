const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const db = require("./models/index");

const app = express();

const prepareAndStartServer = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server is Started on PORT: ${PORT}`);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};

prepareAndStartServer();
