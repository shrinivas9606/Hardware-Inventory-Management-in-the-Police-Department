// server/config/db.js
const mongoose = require('mongoose');
mongoose.set('debug', true); // Add this to your db.js to enable debugging

require('dotenv').config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.error("MongoDB connection error:", err));
    
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
module.exports = connectDB;
