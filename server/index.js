import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectDB.js';
import userRouter from './route/user.route.js'; // assuming file path is correct

const app = express();

dotenv.config();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev')); // ✅ specify format
app.use(helmet({
    crossOriginResourcePolicy: false,
}));

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.json({ message: "Hello from server" });
});

// ✅ Add leading slash here
app.use('/api/user', userRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
