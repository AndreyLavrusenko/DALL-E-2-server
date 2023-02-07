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

})

// CREATE A POST
router.post('', async (req, res) => {

})

module.exports = router