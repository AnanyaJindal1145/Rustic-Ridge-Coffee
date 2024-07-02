import mongoose from 'mongoose';
import bycrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  uid:{
    type: mongoose.Schema.ObjectId,
    required: true 
  },
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
  profile_pic:{
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
});
userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    next();
  }
  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
}
);
userSchema.methods.matchPassword = async function(enteredPassword){
  return await bycrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;