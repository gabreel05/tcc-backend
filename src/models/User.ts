import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  school_number: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Number,
    default: 0,
  },
})

UserSchema.plugin(mongoosePaginate)

export default model('User', UserSchema)
