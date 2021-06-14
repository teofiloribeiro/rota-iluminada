const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cors());

app.get('/', (req, res) => res.send('Ok!'));

require('./controllers/pointsController')(app);

app.listen(process.env.PORT || 3000);