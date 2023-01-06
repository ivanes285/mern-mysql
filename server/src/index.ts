import express, { Application } from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';
import router from './routes/v1/index.routes';
import routesTasks from './routes/v1/task.routes';
const app:Application = express();

const optionsCors = {
    origin: "*",
    optionSuccessStatus: 200,
};


dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(optionsCors));






//Routes
app.use('/api/v1', router);
app.use('/api/v1',routesTasks);

//Static files
// console.log("dirname",__dirname); => dirname C:\Users\iales\Desktop\mern-mysql\server\src
app.use(express.static(path.join(__dirname, '../../client/dist'))); // Configuracion para poder desplegar






app.listen(process.env.PORT, () => {
console.log(  `Server is running on port ${process.env.PORT}  ${colors.blue('http://localhost:4000/') } `);
});