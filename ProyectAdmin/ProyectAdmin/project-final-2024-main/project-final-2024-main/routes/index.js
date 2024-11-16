const express = require("express");
const router = express.Router();

// Ruta principal para verificar conexion/
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Api de botanica Web 1.0.0",
    data: new Date(),
  });
});

module.exports = router;
