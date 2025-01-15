import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('EcoTail Backend is running!');
});

app.get('/api/status', (req, res) => {
  res.json({
    success: true,
    message: 'EcoTail API is healthy!',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 