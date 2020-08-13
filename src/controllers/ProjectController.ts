import { Request, Response } from 'express'

import Project from '../models/Project'

class ProjectController {
  async index(req: Request, res: Response) {
    const { page = 1 } = req.query

    const projects = await Project.paginate(
      {},
      { page: Number(page), limit: 10 }
    )

    return res.json(projects)
  }

  async show(req: Request, res: Response) {
    const project = await Project.findById(req.params.id)

    return res.json(project)
  }

  async store(req: Request, res: Response) {
    const project = await Project.create(req.body)

    return res.json(project)
  }

  async update(req: Request, res: Response) {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    return res.json(project)
  }

  async destroy(req: Request, res: Response) {
    await Project.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

export default new ProjectController()
