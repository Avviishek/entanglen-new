// server.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// TODO: Replace this endpoint with Typeform integration
app.post('/api/trial-request', async (req, res) => {
  // Placeholder for new Typeform API logic
    const { name, email, grade, subject } = req.body;
    try {
    // Typeform integration removed from server for security. Use frontend embed only.
    res.status(501).json({ error: 'Typeform integration removed from server. Use frontend Typeform embed.' });
      if (!typeformRes.ok) {
        const errorText = await typeformRes.text();
        return res.status(500).json({ error: 'Typeform submission failed', details: errorText });
      }
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: 'Server error', details: err.message });
    }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
