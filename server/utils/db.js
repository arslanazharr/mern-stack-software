const mongoose = require("mongoose");

const URI = process.env.URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Connection to the database failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
