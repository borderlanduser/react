import express from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import sequelize from './config/database.js';
import cors from 'cors'; 
import router from './routes/index.js';
import errorMiddleware from './middleware/ErrorHandlingMiddleware.js';
import { fileURLToPath } from 'url';

// 👇 ИМПОРТИРУЕМ АССОЦИАЦИИ
import { defineAssociations } from './models/associations.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(errorMiddleware);
app.use('/static', express.static(path.resolve(__dirname, 'static')));

const start = async () => {
    try {
        await sequelize.authenticate();
        
        // 👇 ВЫЗЫВАЕМ АССОЦИАЦИИ ПЕРЕД СИНХРОНИЗАЦИЕЙ
        defineAssociations();
        
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();