const Product  = require('../app/product/domain/Product')

const validatorCart = {

    product:  function (json) {
        if (Array.isArray(json)) {
            throw new Error( "JSON must be an object");
        } 

        if(!json.quantity){
            throw new Error( "value quantity not exist");
        }

        if(json.quantity < 0){
            throw new Error( "value quantity must positive or 0");
        }
    },

    products: async function (json) {
        if (!Array.isArray(json)) {
            throw new Error("JSON must be an array");
        }
    
        
        await Promise.all(json.map(async product => {
            const result = await Product.findOne({ id: product.productId }).exec();
            if (result === null) {
                throw new Error(`Product with id ${product.productId} not exist`);
            }

            if(product.quantity <= 0){
                throw new Error( "value quantity must be greater than 0");
            }
        }));
    }
}

module.exports =  validatorCart 