var router  = require('express').Router()

var routesCarts = require('../app/carts/routes/carts')

router.use('/carts', routesCarts)

router.get('/', function(req, res) {
    res.status(200).json({'message': 'Connect to API fake shop'})
})

module.exports = router