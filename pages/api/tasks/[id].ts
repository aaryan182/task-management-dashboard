import type { NextApiResponse } from 'next'
import { authMiddleware, AuthenticatedRequest } from '../../../middleware/auth'
import dbConnect from '../../../lib/db'
import Task from '../../../models/Task'

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
    userId
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const task = await Task.findOne({ _id: id, userId })
        if (!task) {
          return res.status(404).json({ success: false, error: 'Task not found' })
        }
        res.status(200).json(task)
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to fetch task' })
      }
      break

    case 'PUT':
      try {
        const task = await Task.findOneAndUpdate(
          { _id: id, userId },
          req.body,
          { new: true, runValidators: true }
        )
        if (!task) {
          return res.status(404).json({ success: false, error: 'Task not found' })
        }
        res.status(200).json(task)
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to update task' })
      }
      break

    case 'DELETE':
      try {
        const deletedTask = await Task.deleteOne({ _id: id, userId })
        if (!deletedTask) {
          return res.status(404).json({ success: false, error: 'Task not found' })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to delete task' })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default authMiddleware(handler)