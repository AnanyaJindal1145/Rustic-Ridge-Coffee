import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
    },
  password: {
    type: String,
     required: true
  },
  isAdmin:{
    type: Boolean,
    default: false
  },
  image:{
    type: String,
    default: 'https://res.cloudinary.com/dxqjzjx7j/image'
  },
  dob:{
    type: Date,
  },
  phone:{
    type: Number,
  },
  address:{
    type: String,
  },
  city:{
    type: String,
  },
  state:{
    type: String,
  },
  pincode:{
    type: Number,
  }
  // resetPasswordToken: String,
  // resetPasswordExpire: Date
});

const User = mongoose.model('User', userSchemaSchema);

export default User;