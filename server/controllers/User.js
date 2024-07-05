import User from "../models/user.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
    const { name, email, password, dob, phone} = req.body;
    try {
        const { name, email, password, dob, phone} = req.body;
        const UserExists= await User.findOne({email});
        if(UserExists){
            res.status(400).json({
                message: 'User already exists',
                success: false
            });
        }
        const userCreated = await User.create({
            name,
            email,
            password,
            dob,
            phone
        });
        generateToken(res, userCreated._id);
        if(userCreated){
            res.status(201).json({
                success:true,
                _id: userCreated._id,
                name: userCreated.name,
                email: userCreated.email,
                isAdmin: userCreated.isAdmin,
                token: generateToken(userCreated._id)
            });
            }
        else{
            res.status(400).json({
                message: 'Invalid user data',
                success: false
            });
        }
        } catch (error) {
            res.status(500).json({
                message: 'Server error',
                success: false
            });
        }
    }
