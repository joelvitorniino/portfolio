import type { NextApiRequest, NextApiResponse } from 'next';
import projects from '../../data/projects.json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = projects;
    res.status(200).json({ data });
  } catch(error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
}
