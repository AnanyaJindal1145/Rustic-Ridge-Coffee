
// Import the express library
const express = require('express');
// Import the mongoose library
const mongoose = require('mongoose');
// Import the User model
const User = require('./models/user');
// Import the Product model
const Product = require('./models/product');
// Import the Order model
const Order = require('./models/order');
// Import the OrderItem model
const OrderItem = require('./models/orderItem');
// Import the bcrypt library
const bcrypt = require('bcrypt');
// Import the jsonwebtoken library
const jwt = require('jsonwebtoken');
// Import the dotenv library
require('dotenv').config();
// Import the cors library
const cors = require('cors');
// Import the cloudinary library
const cloudinary = require('cloudinary').v2;
// Import the multer library
const multer = require('multer');
// Import the multer-storage-cloudinary library
const { CloudinaryStorage } = require('multer-storage-cloudinary');
// Import the nodemailer library
const nodemailer = require('nodemailer');
// Import the path library
const path = require('path');
// Import the body-parser library
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.static(app.))
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
const mongoose=require(mongoose);
mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to the database');
    }
);
const User=require('./models/user');
const Product=require('./models/product');
const Order=require('./models/order');
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
    }
);
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
    }
);
app.get('/orders', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
    }
);
app.get('/users/:id', async (req, res) => {
    const user
    = await User.findById(req.params.id);
    res.json(user);
    }
);
app.get('/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
    }
);
app.get('/orders/:id', async (req, res) => {
    const order = await Order.findById(req.params.id);
    res.json(order);
    }
);
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
    }
);
app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
    }
);
app.post('/orders', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
    }
);
app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate
    (req.params.id, req.body, { new: true });
    res.json(user);
    }
);
app.put('/products/:id', async (req, res) => {
    const product = await Product
    .findByIdAndUpdate(req.params.id
    , req.body
    , { new: true });
    res.json(product);
    }
);
app.put('/orders/:id', async (req, res) => {
    const order = await Order.findByIdAndUpdate
    (req.params.id, req.body, { new: true });
    res.json(order);
    }
);
app.delete('/users/:id', async (req, res) => {
    const
    user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
    }
);
app.delete('/products/:id', async (req, res) => {
    const product = await Product
    .findByIdAndDelete(req.params.id);
    res.json(product);
    }
);
app.delete('/orders/:id', async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.json(order);
    }
);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);

