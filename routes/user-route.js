const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/users");

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middlewares");

router.get("/userCreated/:id", isLoggedIn(), async (req, res, next) => {
  try {
    const userfind = await User.findById(req.params.id);
    res.status(200).json(userfind);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST route => to create a new user
router.post("/add-user", isLoggedIn(), (req, res, next) => {
  User.create({
    photo: req.body.photo,
    name: req.body.name,
    email: req.body.email,
    position: req.body.position,
    technologies: req.body.technologies,
    uploadCV: req.body.uploadCV,
    channels: req.body.channels,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// UPDATE USER
router.put("/update-user/:id", async (req, res, next) => {
  let idUser = req.params.id;
  console.log(req.body);
  const { photo, name, position, technologies, channels } = req.body;
  try {
    let updateUser = await User.findByIdAndUpdate(
      idUser,
      { name, position, technologies, channels, photo },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    console.log(err);
  }
});

// GET route => to get user public profile - detailed view
router.get("/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  User.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

/* router.get("/:id", (req, res, next) => {
  try {
    const userfind = User.findById(req.params.id);
    res.status(200).json(userfind);
  } catch (error) {
    res.status(500).json(error);
  }
}); */

module.exports = router;
