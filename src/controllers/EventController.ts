import { Request, Response } from 'express'

import Event from '../models/Event'

class EventController {
  async index(req: Request, res: Response) {
    const { page = 1 } = req.query

    const events = await Event.paginate({}, { page: Number(page), limit: 10 })

    return res.json(events)
  }

  async show(req: Request, res: Response) {
    const event = await Event.findOne({ _id: req.params.id })
      .populate('responsible')
      .exec()

    return res.json(event)
  }

  async store(req: Request, res: Response) {
    const event = await Event.create(req.body)

    return res.json(event)
  }

  async update(req: Request, res: Response) {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    return res.json(event)
  }

  async destroy(req: Request, res: Response) {
    await Event.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

export default new EventController()
