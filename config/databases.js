var mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('connected', function () {
    console.log('Conected mongoDB')
})
mongoose.connection.on('error', function(error) {
    console.error('Error: ', error)
})