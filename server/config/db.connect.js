const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
async function connectDb() {
    try {
        const connection = await mongoose.connect(process.env.MOGODB_URL);
        console.log("DB connection successful");
    } catch (error) {
        console.log("Error occurred in connection:", error);
    }
}

module.exports = { connectDb };
