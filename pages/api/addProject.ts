import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    try {
      const { title, description, url, imageLink, repository } = req.body;

      if (!title || !description || !url || !imageLink || !repository) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      await prisma?.project.create({
        data: {
          title,
          description,
          url,
          imageLink,
          repository,
        },
      });

      return res.status(200).json({ message: 'Project added' });
    } catch (error) {
      console.error('Error adding project:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
