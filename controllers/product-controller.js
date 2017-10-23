
const Product = require('mongoose').model('Product')

module.exports = {
    createProduct:(req, res) => {
        let bodyParams = req.body

        let productObj = {
            category: bodyParams.category,
            image: bodyParams.image,
            size: bodyParams.size,
            toppings: bodyParams.toppings
        }

        Product.create(productObj).then((h) => {
            res.render('products/create-product')
        })
    },
    getCreateProductView:(req, res) => {
        res.render('products/create-product')
    }
}