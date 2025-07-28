import { Request, Response } from 'express';
import { performSearchService } from '../services/searchService';

export async function performSearch(req: Request, res: Response) {
  const { searchInput, radiusInput, zipInput } = req.body;

  try {
    const data = await performSearchService(searchInput, radiusInput, zipInput);
    
    return res.json(data)

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Issue in Service' });
  }
}
