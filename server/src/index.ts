import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import contactRouter from './routes/contact';
import quoteRouter from './routes/quote';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173'
}));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'TrustedHandZW API is running ✓' });
});

app.use('/api/contact', contactRouter);
app.use('/api/quote', quoteRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;