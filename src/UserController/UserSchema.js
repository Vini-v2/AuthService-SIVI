import env from 'dotenv'
env.config()
const { DB_BCRYPT_SALT_ROUNDS } = process.env

import bcrypt from 'bcrypt'
import mongoose from 'mongoose';
import uniquePlagin from 'mongoose-beautiful-unique-validation'
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    first: String,
    last: String
  },
  role: {
    type: String,
    required: true,
    default: 'user'
  },
  refreshTokens: [String]
});
userSchema.plugin(uniquePlagin)
userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) return next(err)
    user.password = hash;
    next();
  })
});


const User = mongoose.model('User', userSchema);
export default User;