const express = require('express');
const app = express();


//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())

app.get('/order-food', (req, res) => {
  const order = req.query;
  res.send(`[GET] OK, here are your ${order.qty} ${order.name}'s`)
})

app.post('/order-food', (req, res) => {
  const order = req.body;
  res.send(`[POST] OK, here are your ${order.qty} ${order.name}'s`)
})

app.listen(3000, () => {
  console.log("ON PORT 3000!")
})
