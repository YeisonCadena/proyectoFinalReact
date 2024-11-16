const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true },
  photo: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["administrador", "investigador", "colaborador"],
    required: true,
  },
  session: { type: String, default: null },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
