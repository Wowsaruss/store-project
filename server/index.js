require('dotenv').config();
const cors = require('cors')
    , express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , session = require('express-session');
const app = express();


app.use(bodyParser.json());
app.use(cors());

// Massive connection

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
})

// database

// endpoints

app.get('/api/home_products', (req, res) => {
    req.app.get('db').get_products().then(products => {
        res.status(200).send(products);
    }).catch((err) => {console.log(err)})
})

app.get('/api/dresses', (req, res) => {
    req.app.get('db').get_dresses().then(products => {
        res.status(200).send(products);
    }).catch((err) => {console.log(err)})
})

app.get('/api/product_details/:productid', (req, res) => {
    req.app.get('db').get_product([req.params.productid]).then(product => {
        res.send(product[0]);
    }).catch((err) => {console.log(err)})
})

// app.post('/api/order', (req, res) =>{
//     req.app.get('db').submit_order([]).then(order => {
//         res.status(200).json('Hey you!')
//     }).catch((err) => {console.log(err)})
// })

// Port
const port  =  3000;

app.listen(port, () => console.log(`listening on port ${port}`));