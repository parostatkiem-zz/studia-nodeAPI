import express from 'express';
import cars from './data/cars';
const bodyParser = require('body-parser');

let cars_array = [...cars];
// Set up the express app
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    allowedHeaders: ['Content-Type'],

    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
  }),
);

// get root call
app.get('/', (req, res) => {
  res.status(404).send('Hello world!');
});

// get all cars
app.get('/api/cars', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'cars retrieved successfully',
    cars: cars_array,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
