import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js'
import errorHandler from './middleware/error.js';

dotenv.config();
connectDB();

const app = express();


//CORS COnfiguration,
const corsOptions = {
  origin: '*', // Allowing all origins.
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};
app.use(express.json());

app.get('/', (req,res)=> {
  res.json({message:"Working"})
})
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);



app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});