const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creamos el modelo User
const userSchema = new Schema(
  {
    photo: String,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    position: String,
    technologies: String,
    uploadCV: String,
    channels: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
