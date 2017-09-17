const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');

require('dotenv').config();
const app = express();
const port  =  3000;

app.use(bodyParser.json());
app.use(cors());

// endpoints

app.listen(port, () => console.log(`listening on port ${port}`));