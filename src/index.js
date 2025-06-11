const express = require("express");

const { PORT } = require("./config/serverConfig");

const app = express();

const prepareAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is Started on PORT: ${PORT}`);
  });
};

prepareAndStartServer();
