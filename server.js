const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle API routes
app.use('/.netlify/functions/', (req, res) => {
  // This will be handled by Netlify Functions
  res.status(404).json({ error: 'Function not found' });
});

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server if not running in Netlify Functions
if (process.env.NETLIFY !== 'true') {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

// Export handler for Netlify Functions
module.exports = app;
module.exports.handler = serverless(app); 