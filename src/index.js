import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router';
import config from '../config';
import mongoose from 'mongoose';

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.use((err, req, res, next) => {
  console.log(err);
  res.send({ Error: err.message });
});
app.listen(config.port, () => console.log(`Listening to port ${port}`));

mongoose.connect('mongodb://localhost/app', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
