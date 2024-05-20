import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      const { title, description, url, imageLink, height, width, repository } = req.body;

      if (!title || !description || !url || !imageLink || !height || !width || !repository) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      await prisma?.project.create({
        data: {
          title,
          description,
          url,
          imageLink,
          height,
          width,
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
