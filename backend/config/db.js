const mongoose = require('mongoose')


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connected to Db')
    } catch (err) {
        console.log()
        
    }
}

module.exports = connectDB