import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma' 
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = req.headers['x-api-key'];
  
  if(apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Unauthorized' });
  };

  try {
    const projects = await prisma.project.findMany();

    res.status(200).json({ data: projects })
  } catch(error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
}