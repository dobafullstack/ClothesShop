const express = require('express')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/index');
const connectDB = require('./config/mongoose');

const authMiddleware = require('./middlewares/auth.middleware');

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(authMiddleware);
router(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
