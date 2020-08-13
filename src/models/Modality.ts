import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const ModalitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
})

ModalitySchema.plugin(mongoosePaginate)

export default model('Modality', ModalitySchema)
