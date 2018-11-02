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

//add new car
app.post('/api/car', (req, res) => {
  const { brand, model } = req.body;
  if (!brand || !model) {
    res.status(402).send({
      success: 'false',
      message: 'not all params provided',
    });
    return;
  }
  const last_id = Math.max.apply(Math, cars_array.map(car => car.id));
  cars_array = [...cars_array, { id: last_id + 1, brand, model }];
  res.status(200).send({
    success: 'true',
    message: 'car added',
  });
});

// delete single car
app.delete('/api/car/:id', (req, res) => {
  const id = req.params.id;
  const cars_new = cars_array.filter(car => car.id != id);

  if (cars_new.length === cars_array.length) {
    res.status(409).send({
      success: 'false',
      message: 'Could not remove car with given id',
    });
    return;
  }
  cars_array = [...cars_new];
  res.status(200).send({
    success: 'true',
    message: 'car removed',
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
