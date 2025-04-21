const Cart = require('../domain/Cart')
const ValidatorCart = require('../../../validators/ValidatorCart')
const { getProducts} = require('../../product/service/GetProducts')
const cartsController = {

  search: async function (req, res) {
    try {
      const cartId = req.params.id
      let result = await Cart.findOne({ 'cart.id': cartId })
        .select('-_id')
        .exec()


      if (result === null) {
        return res.status(500).json({error: `Not found cart with id ${cartId}`})
      }

      const products = await getProducts(result.cart.products)
      let cart = JSON.parse(JSON.stringify(result));
      cart.cart.products = products     
      
      res.status(200).json(cart)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProducts: async function (req, res) {
    const cartId = req.params.id
    const body = req.body;

    try {
      await ValidatorCart.products(body)
      let productsUpdate = await Cart.findOneAndUpdate(
        { 'cart.id': cartId },
        { 'cart.products': body },
        { new: false }
      ).select('-_id').exec()
  
      if (!productsUpdate) {
        return res.status(500).json({ error: `Not found cart with id  ${cartId}`})
      }
      
      res.status(200).json(productsUpdate)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProduct: async function (req, res) {
    const cartId = req.params.id
    const productId = req.params.productId
    const json = req.body;

    try {
      ValidatorCart.product(json)

      let productUpdate = await Cart.findOneAndUpdate(
        {
          'cart.id': cartId,
          'cart.products.productId': productId
        },
        {
          $set: { 'cart.products.$.quantity': json.quantity }
        },
        { new: true }
      ).select('-_id').exec();

      if (!productUpdate) {
        return res.status(404).json({
          error: `Not update cart with id ${cartId} and product with id ${productId}`,
        });
      }

      res.status(200).json(productUpdate)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = cartsController