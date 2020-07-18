import express from 'express';
import path from 'path'
import routes from './routes';
import {errors} from 'celebrate';

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); //Acessando imagens uploads

app.use(errors());

app.listen(3333);