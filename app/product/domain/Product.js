const { Schema, model }  = require('mongoose')
const productShema =  Schema({
    id: Number,
    title: String,
    price: Number,
    image: String
})

module.exports = model('Product', productShema, 'products')