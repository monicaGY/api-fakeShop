const Product = require('../domain/Product')
const getProducts = async (products) => {

    if (!Array.isArray(products)) {
        throw new Error('products must be an array');
    }
    const productIds = products.map(product => product.productId);
    let productsDetails = await Product.find({ id: { $in: productIds } }).select('-_id -rating -description -category').exec();

    return products.map(product => {
        let productSearch = productsDetails.find(p => p.id === product.productId);

        const productDetails = productSearch.toObject()

        return {
            ...productDetails,
            quantity: product.quantity,
        };
    });
}
module.exports = { getProducts }