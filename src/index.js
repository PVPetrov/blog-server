import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router';
import config from '../config';

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => console.log(`Listening to port ${port}`));
