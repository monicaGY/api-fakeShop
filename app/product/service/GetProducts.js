const Product = require('../domain/Product')
const getProducts = async (products) => {

    if (!Array.isArray(products)) {
        throw new Error('products must be an array');
    }
    const productIds = products.map(product => product.productId); 

    return await Product.find({ id: { $in: productIds } }).select('-_id -rating -description -category').exec();
} 
module.exports = { getProducts }