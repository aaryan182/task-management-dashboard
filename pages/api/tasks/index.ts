import type { NextApiRequest, NextApiResponse } from 'next';
import { authMiddleware, AuthenticatedRequest } from '../../../middleware/auth';
import dbConnect from '../../../lib/db';
import Task from '../../../models/Task';

async function handler(req: AuthenticatedRequest, res: NextApiResponse) {
  const { method } = req;
  const userId = req.userId; // This comes from the auth middleware

  await dbConnect(); // Connect to the database

  switch (method) {
    case 'GET':
      try {
        const tasks = await Task.find({ userId });
        res.status(200).json(tasks);
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to fetch tasks' });
      }
      break;
    case 'POST':
      try {
        const task = await Task.create({ ...req.body, userId });
        res.status(201).json(task);
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to create task' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default authMiddleware(handler);