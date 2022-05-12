const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/learn_dev');
        console.log('Connect to successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = {
    connect,
};
