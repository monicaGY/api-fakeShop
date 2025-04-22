let router = require('express').Router()
let cartsController = require('../controller/CartsController')

router.get('/:id', (req, res) => {
    cartsController.search(req, res);
})
router.put('/:id/products', (req, res) => {
    cartsController.updateProducts(req, res);
})
router.put('/:id/products/:productId', (req, res) => {
    cartsController.updateProduct(req, res)
})
router.delete('/:id/products/:productId', (req, res) => {
    cartsController.deleteProduct(req, res)
})
router.post('/:id/products/:productId/add', (req, res) => {
    cartsController.addProduct(req, res)
})

module.exports = router