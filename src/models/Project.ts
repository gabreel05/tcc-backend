import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const ProjectSchema = new Schema({
  num_cope: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  coordinator: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  vice_coordinator: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  scholarship: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  volunteers: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  place: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    required: true,
  },
  social_networks: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
})

ProjectSchema.plugin(mongoosePaginate)

export default model('Project', ProjectSchema)
