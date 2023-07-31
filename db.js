const mongoose = require('mongoose');
require('dotenv').config()
const url =process.env.dbUrl || "mongodb://localhost:127.0.0.1:27017/iNoteBook"

const connectToMongo = () => {
    mongoose.connect(url)
        .then(() => console.log('DB Connected'))
        .catch((err) => console.log(err));
}

module.exports = connectToMongo;
