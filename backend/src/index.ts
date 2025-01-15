import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { logger } from './middleware/logger.js';
import sampleRoute from './routes/sampleRoute.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/api', sampleRoute);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('EcoTail Backend is running!');
});

// Start the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app; 