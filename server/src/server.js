const db = require('./config/dbconfig');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 5001;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(bodyParser.json());

app.use('/api',taskRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});