const express = require('express');
const connectDB = require('./config/dbConnection');
const userRoute = require('./routes/userRoute');
const app = express();
connectDB();

app.use(express.json());
app.use('/api/users/', userRoute);
app.listen(5000, console.log('Server started on port 5000'));
