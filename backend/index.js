const express = require('express');
const app = express();
const mongoose = require('mongoose');
const hostname = 'localhost';
const port = 3000
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const formRouterLink = require('./routes/route');
const cors = require('cors');

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database is connected'))

app.use(bodyParser.json());
app.use(cors());
app.use(cors());
app.use('/api', formRouterLink);

app.listen(port, hostname, ()=>{
    console.log(`The server is started on ${hostname}${port}`)
})


