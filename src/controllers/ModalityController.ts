import { Request, Response } from 'express'

import Modality from '../models/Modality'

class ModalityController {
  async index(req: Request, res: Response) {
    const { page = 1 } = req.query

    const modalities = await Modality.paginate(
      {},
      { page: Number(page), limit: 10 }
    )

    return res.json(modalities)
  }

  async show(req: Request, res: Response) {
    const modality = await Modality.findById(req.params.id)

    return res.json(modality)
  }

  async store(req: Request, res: Response) {
    const modality = await Modality.create(req.body)

    return res.json(modality)
  }

  async update(req: Request, res: Response) {
    const modality = await Modality.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    return res.json(modality)
  }

  async destroy(req: Request, res: Response) {
    await Modality.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

export default new ModalityController()
