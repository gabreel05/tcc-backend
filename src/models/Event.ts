import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  responsible: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  place: {
    type: String,
  },
  limit_vacancies: {
    type: Number,
    required: true,
  },
  keywords: {
    type: String,
  },
  guest: {
    type: String,
  },
  speaker: {
    type: String,
  },
  registration_form: {
    type: String,
  },
  participants_list: [
    {
      user: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      participation_type: {
        type: String,
        default: 'listener',
      },
      isPresent: {
        type: Boolean,
        default: false,
      },
    },
  ],
})

EventSchema.plugin(mongoosePaginate)

export default model('Event', EventSchema)
