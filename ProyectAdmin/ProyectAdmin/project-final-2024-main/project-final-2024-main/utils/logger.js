const fs = require("fs");
const path = require("path");
const { logger } = require("../config/environment");

class Logger {
  static logError(error) {
    const logFilePath = path.join(__dirname, "..", "error.log");

    // Captura la traza del error
    const errorStack = error.stack.split("\n");
    const relevantLine = errorStack[1].trim(); // Línea relevante

    const logMessage = `Error capturado: {
            message: ${error.message},
            stack: ${relevantLine},
            date: ${new Date().toISOString()}
        }\n`;

    // Escribe el mensaje en error.log
    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error("Error al escribir en el archivo de log:", err);
      }
    });

    // Muestra en consola si LOGGER es false
    if (logger === "false") {
      console.error(logMessage);
    }
  }
}

module.exports = Logger;
