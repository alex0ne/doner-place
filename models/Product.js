const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const product = new mongoose.Schema({
    category: {type:String, required:true},
    image: {type:String},
    size: {type:Number, required:true},
    toppings: {type:String} 
})

module.exports = mongoose.model('Product', product)