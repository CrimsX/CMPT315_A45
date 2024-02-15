import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';

import connection from './database/database.js'
import router from './routes/monsterRoutes.js';

connection();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('The API is working');
});

app.use('/monsters', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
