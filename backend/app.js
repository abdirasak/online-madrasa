const express = require('express')
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const port = process.env.PORT || 3000
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express()
connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/students', require('./routes/studentRoute'))
app.use('/api/teachers', require('./routes/teacherRoute'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})