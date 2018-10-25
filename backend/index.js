import express from 'express';
import cars from './data/cars';
// Set up the express app
const app = express();
// get all todos
app.get('/api/cars', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'cars retrieved successfully',
    cars: cars,
  });
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
