import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'Username already exists'],
  },
  image: {
    type: String,
    default: 'https://picsum.photos/100/100',
  },
  role: {
    type: String,
    default: 'user',
  }
}, { timestamps: true })

const User = models.User || model('User', UserSchema)

export default User