const mongoose = require('mongoose');

const connectItemDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/itemdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB connected for ItemDB');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectItemDB;
