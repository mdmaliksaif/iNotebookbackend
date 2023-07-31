const mongoose = require('mongoose');
require('dotenv').config()
const url =process.env.dbUrl

const connectToMongo = () => {
    mongoose.connect(url)
        .then(() => console.log('DB Connected'))
        .catch((err) => console.log(err));
}

module.exports = connectToMongo;
