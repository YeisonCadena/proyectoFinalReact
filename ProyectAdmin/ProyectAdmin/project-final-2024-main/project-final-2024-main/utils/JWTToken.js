const jwt = require("jsonwebtoken");
const environment = require("../config/environment");
const User = require("../models/User");
const { logError } = require("./logger");

const createToken = (payload) => {
  return jwt.sign(payload, environment.jwt.secret, {
    expiresIn: environment.jwt.expired,
  });
};

const verifiedToken = (requiredRole) => {
  return async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Acceso denegado, token no proporcionado",
        data: null,
      });
    }

    try {
      const decoded = jwt.verify(token, environment.jwt.secret);
      req.user = decoded;
      const user = await User.findById(decoded.id);

      if (
        !user ||
        decoded.role !== user.role ||
        user.session === null ||
        user.session !== token
      ) {
        return res.status(401).json({
          success: false,
          message: "Acceso denegado, token adulterado!",
          data: null,
        });
      }

      if (requiredRole && requiredRole !== user.role) {
        return res.status(403).json({
          success: false,
          message: "No tienes los suficientes permisos.",
          data: null,
        });
      }

      next();
    } catch (err) {
      logError(err);
      return res.status(400).json({
        success: false,
        message: "Token no válido",
        data: null,
      });
    }
  };
};

module.exports = {
  createToken,
  verifiedToken,
};
