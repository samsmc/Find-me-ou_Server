const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/users");


const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
} = require("../helpers/middlewares");

router.get('/userCreated/:id' ,  isLoggedIn(),  async (req,res , next ) => {
    try { 
     const userfind = await User.findById(req.params.id)
     res.status(200).json(userfind)
 } catch (error) {
      res.status(500).json(error)
 }
})

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
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err);
        });
});

// UPDATE USER
router.put('/update-user/:id', async (req, res, next) => {
    let idUser = req.params.id;
    console.log(req.body)
    const { name, email, position, technologies, channels } = req.body;
    try {
        let updateUser = await User.findByIdAndUpdate(idUser, { name, email, position, technologies, channels, photo: req.body.imgUrl }, { new: true });
        res.status(200).json(updateUser)
    } catch (err) {
        console.log(err)
    }
});


module.exports = router; 