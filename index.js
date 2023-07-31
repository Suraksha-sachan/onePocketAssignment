import express from 'express';
import router from './routes/route.js';
import bodyParser from 'body-parser';
import { countWordsInFile } from './service/readFile.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router);

const filename = 'data.txt';

countWordsInFile(filename);


app.all('*', (req, res) => {
  res.send('Hello, World!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});