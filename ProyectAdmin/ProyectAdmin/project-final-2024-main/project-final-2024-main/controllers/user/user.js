const User = require("../../models/User");
const { createToken } = require("../../utils/JWTToken");
const { logError } = require("../../utils/logger");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    try {
      const { name, email, password, photo, phone, lastname, role } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "El correo ya está en uso",
          data: null,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name,
        email,
        photo,
        lastname,
        phone,
        role,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).json({
        success: true,
        message: "Usuario registrado exitosamente",
        data: {
          user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          },
        },
      });
    } catch (error) {
      logError(error);
      res.status(500).json({
        success: false,
        message: "Error al registrar el usuario",
        data: error,
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Credenciales inválidas",
          data: null,
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Credenciales inválidas",
          data: null,
        });
      }

      const token = createToken({
        id: user._id,
        email: user.email,
        role: user.role,
      });

      user.session = token;
      await user.save();

      res.status(200).json({
        success: true,
        message: "Inicio de sesión exitoso",
        data: {
          user: {
            id: user._id,
            name: user.name,
            lastname: user.lastname,
            role: user.role,
          },
          token, 
        },
      });
    } catch (error) {
      logError(error);
      res.status(500).json({
        success: false,
        message: "Error al iniciar sesión",
        data: error,
      });
    }
  },

  update: async (req, res) => {
    try {
      const { userId } = req.params;
      const { name, email, photo, phone, lastname, password, role } = req.body;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "Usuario no encontrado",
          data: null,
        });
      }

      if (password) {
        user.password = await bcrypt.hash(password, 10);
      }

      user.name = name || user.name;
      user.email = email || user.email;
      user.photo = photo || user.photo;
      user.phone = phone || user.phone;
      user.lastname = lastname || user.lastname;
      user.role = role || user.role;

      await user.save();

      res.status(200).json({
        success: true,
        message: "Usuario actualizado exitosamente",
        data: {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        },
      });
    } catch (error) {
      logError(error);
      res.status(500).json({
        success: false,
        message: "Error al actualizar el usuario",
        data: error,
      });
    }
  },

  trash: async (req, res) => {
    try {
      const { userId } = req.params;

      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "Usuario no encontrado",
          data: null,
        });
      }

      res.status(200).json({
        success: true,
        message: "Usuario eliminado exitosamente",
        data: null,
      });
    } catch (error) {
      logError(error);
      res.status(500).json({
        success: false,
        message: "Error al eliminar el usuario",
        data: error,
      });
    }
  },

  logout: async (req, res) => {
    try {
      const token = req.header("Authorization");

      if (!token) {
        return res.status(401).json({
          success: false,
          message: "No hay sesión activa.",
          data: null,
        });
      }

      const decoded = jwt.verify(token, environment.jwt.secret);

      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "Usuario no encontrado.",
          data: null,
        });
      }

      user.session = null;
      await user.save();

      res.status(200).json({
        success: true,
        message: "Logout exitoso.",
        data: null,
      });
    } catch (error) {
      logError(error);
      res.status(500).json({
        success: false,
        message: "Error al cerrar sesión",
        data: error,
      });
    }
  },
};
