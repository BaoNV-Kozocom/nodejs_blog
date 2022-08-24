const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('connect success f8_education_dev');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
