const Product  = require('../app/product/domain/Product')
const validatorProduct =  {
    exists: async function (productId) {
        const result = await Product.findOne({ id: productId }).exec();

        if (result === null) {
            throw new Error(`Product with id ${productId} not exist`);
        }
    }
}
module.exports = validatorProduct