const express = require("express");
const router = express.Router();
const uploader = require("../config/cloudinary");



router.post("/uploadCv",uploader.single("uploadCV"), (req, res ,next ) => {
   if (!req.file) {
       next(new Error ("No file Uploaded!"));
       return
   }res.json({secure_url: req.file.secure_url});
})



module.exports = router