const router = require('express').Router()
const cloudinary = require('cloudinary').v2;

require('dotenv').config()

const Post = require('../mongodb/models/post')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.OPENAI_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// GET ALL POSTS
router.get('', async (req, res) => {
    try {
        const posts = await Post.find({})

        res.status(200).json({success: true, data: posts})
    } catch (err) {
        res.status(500).json({success: false, message: err})
    }
})

// CREATE A POST
router.post('', async (req, res) => {
   try {
       const {name, prompt, photo} = req.body
       const photoUrl = await cloudinary.uploader.upload(photo)

       const newPost = await Post.create({
           name,
           prompt,
           photo: photoUrl.url
       })

       res.status(201).json({success: true, data: newPost})
   } catch (err) {
       res.status(500).json({success: false, message: err})
   }
})

module.exports = router