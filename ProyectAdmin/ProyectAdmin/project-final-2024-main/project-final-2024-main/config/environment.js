require("dotenv").config();

// Construye las variables de entorno en objeto
const environment = {
  port: process.env.PORT || 3000,
  jwt: {
    secret: process.env.SECRET || "",
    expired: process.env.EXPIRED || 0,
  },
  mongoURI: process.env.URL_MONGO_DB || "",
  logger: process.env.LOGGER || false,
};

module.exports = environment;
