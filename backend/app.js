const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/students', require('./routes/studentRoute'))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})