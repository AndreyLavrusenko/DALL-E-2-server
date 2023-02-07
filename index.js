const express = require("express")
const cors = require("cors");
const connectDB = require("./mongodb/connect");

const postRoutes = require('./routes/postRoutes')
const dalleRoutes = require('./routes/dalleRoutes')

require('dotenv').config()

const app = express();

app.use(cors({credentials: true, origin: [process.env.CLIENT_URI]}))
app.use(express.json({limit: '50mb'}))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
    res.send('Hello world')
})


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('Server has started'))
    } catch (err) {
        console.log(err)
    }
}

startServer()