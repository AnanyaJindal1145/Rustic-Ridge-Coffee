import express from 'express';
import bodyParser from 'body=parser';
import mongoose from 'mongoose';
import cors from 'cors';
import ConnectDB from './db/index.js';
import User from './models/user.js';
import Product from './models/product.js';
import Order from './models/order.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/order', OrderRouter);
app.use('/product', ProductRouter);
app.use('/user', UserRouter);

const PORT = process.env.PORT || 5000;

ConnectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.log("Error in connecting to MongoDB", error);
});

