const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

const { BUILD, } = require('./data');

app.get('/api/home', (req, res) => {
    console.log(req.query);
    res.status(200).json({
        BUILD
    })
});

app.listen(8000, () => console.log(`App started in port: 8000`));