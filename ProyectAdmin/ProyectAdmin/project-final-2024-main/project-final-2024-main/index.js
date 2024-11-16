//Importaciones de libs externas
const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

// Importaciones locales
const { port } = require("./config/environment");
const connectDB = require("./config/mongo");

// Imports de rutas
const main = require("./routes");
const user = require("./routes/user");

// Constantes de llamado
const app = express();

// Hacer conexion a mongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para consultar las imagenes subidas
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Rutas de la api
app.use("/", main);
app.use("/user", user);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
