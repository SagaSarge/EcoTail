import { Router, Request, Response } from 'express';
import { formatResponse } from '../utils/responseFormatter.js';

const router = Router();

// Example route
router.get('/status', (_req: Request, res: Response) => {
  res.json(formatResponse({ status: 'EcoTail API is healthy!' }));
});

export default router; 