import { Request, Response } from 'express'

import User from '../models/User'

class UserController {
  async index(req: Request, res: Response) {
    const { page = 1 } = req.query

    const users = await User.paginate({}, { page: Number(page), limit: 10 })

    return res.json(users)
  }

  async show(req: Request, res: Response) {
    const user = await User.findById(req.params.id)

    return res.json(user)
  }

  async store(req: Request, res: Response) {
    const user = await User.create(req.body)

    return res.json(user)
  }

  async update(req: Request, res: Response) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    return res.json(user)
  }

  async destroy(req: Request, res: Response) {
    await User.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

export default new UserController()
