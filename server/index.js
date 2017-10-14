// using .env file
require('dotenv').config();

// imports
const cors = require('cors')
    , express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , session = require('express-session');
const app = express();
const port  =  3080;

// Controllers
const cart_controller = require('./controllers/cart_controller');
const products_controller = require('./controllers/products_controller');

// cors / body-parser
app.use(bodyParser.json());
app.use(cors());

// Massive database connection
massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
})


// ENDPOINTS
// GET
// app.get('/api/home_products', (req, res) => {
//     req.app.get('db').get_products().then(products => {
//         res.status(200).send(products);
//     }).catch((err) => {console.log(err)})
// })
// app.get('/api/dresses', (req, res) => {
//     req.app.get('db').get_dresses().then(products => {
//         res.status(200).send(products);
//     }).catch((err) => {console.log(err)})
// })
// app.get('/api/new_arrivals', (req, res) => {
//     req.app.get('db').new_arrivals().then(products => {
//         res.status(200).send(products);
//     }).catch((err) => {console.log(err)})
// })
// app.get('/api/product_details/:productid', (req, res) => {
//     req.app.get('db').get_product([req.params.productid]).then(product => {
//         res.send(product[0]);
//     }).catch((err) => {console.log(err)})
// })

// GET
app.get('/api/dresses', products_controller.dresses);
app.get('/api/home_products', products_controller.getProducts);
app.get('/api/product_details/:productid', products_controller.productDetails);
app.get('/api/new_arrivals', products_controller.newArrivals);
// POST
app.post('/api/cart', cart_controller.addToCart);
// DELETE
app.delete('/api/cart/:id/:userid', cart_controller.deleteItems);


// Port
app.listen(port, () => console.log(`listening on port ${port}`));