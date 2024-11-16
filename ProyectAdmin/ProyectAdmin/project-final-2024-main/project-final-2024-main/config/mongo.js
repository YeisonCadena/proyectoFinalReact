const mongoose = require("mongoose");
const { mongoURI } = require("./environment");
const logger = require("../utils/logger");

// Funcion para establecer la conexion a mongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Conectado a MongoDB");
  } catch (error) {
    logger.logError(error);
    process.exit(1);
  }
};

module.exports = connectDB;
