import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    // name: String,
    // price: Number,
    // description: String,
    // image: String,
    // category: String,
    // subcategory: String,
    // stock: Number
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    category:{
        type:String,
    },
    subcategory:{
        type:String,
    },
    stock:{
        type:Number,
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;