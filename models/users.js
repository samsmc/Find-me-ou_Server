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
    linkedin: String,
    github: String,
    stack: String,
    medium: String,
    reddit: String,
    codePen: String,

    /* linkedin: {url: String, check: Boolean},
    github: {url: String, check: Boolean},
    stack: {url: String, check: Boolean},
    medium: {url: String, check: Boolean},
    reddit: {url: String, check: Boolean},
    codePen: {url: String, check: Boolean}, */
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
