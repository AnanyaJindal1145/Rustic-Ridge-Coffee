import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    oid:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    uid: {
        type: mongoose.Schema.ObjectId,
        ref: 'User', // set the foreign key reference to the User model
        required: true
    },
    products: {
        type: [{ type: mongoose.Schema.ObjectId, ref: 'Product' }],
        required: true
    },
    status: {
        type: String,
        enum: ['success', 'cancelled', 'pending'],
        default: 'pending'
    },
    total:{
        type: Number,
        required: true
    },
    payment_method:{
        type: String,
        required: true
    },
    payment_status: {
        type: String,
        enum: ['success', 'fail', 'pending'],
        default: 'pending'
    },
    date:{
        type: Date,
        default: Date.now
    }
});
const Order = mongoose.model('Order', userSchema);
export default Order;