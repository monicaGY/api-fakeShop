const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  cart: {
    id: { type: Number, required: true },  
    userId: { type: Number, required: true },  
    products: [{
      _id: false, 
      productId: { type: Number, required: true},  
      quantity: { type: Number, required: true }  
    }]
  },
});

module.exports = model("Cart", CartSchema, "carts");