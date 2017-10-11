require('dotenv').config();
const cors = require('cors')
    , express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , session = require('express-session');
const app = express();

const cart_controller = require('./cart_controller');


app.use(bodyParser.json());
app.use(cors());

// Massive database connection

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
})


// endpoints

// Get
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
// app.get('/api/new_arrivals', (req, res) => {
//     req.app.get('db').new_arrivals().then(products => {
//         res.status(200).send(products);
//     }).catch((err) => {console.log(err)})
// })
app.get('/api/product_details/:productid', (req, res) => {
    req.app.get('db').get_product([req.params.productid]).then(product => {
        res.send(product[0]);
    }).catch((err) => {console.log(err)})
})

// Post

// app.post('/api/rename_later', () => {cart_controller.cart});
// app.post('/api/cart', () => {cart_controller.cart});
app.post('/api/cart', cart_controller.addToCart);

// app.post('/api/submit_order', (req, res) => {
//     req.app.get('db').submit_data([user_name, fav_color]).then(order => {
//         res.status(200).json('working!');
//     }).catch((err) => {console.log(err)})
// })

// Put
// app.put('/api/submit_order', (req, res) => {
//     req.app.get('db').submit_order().then(order => {
//         res.status(200).json();
//     }).catch((err) => {console.log(err)})
// })

// Delete
// app.delete('/api/submit_order', (req, res) => {
//     req.app.get('db').submit_order().then(order => {
//         res.status(200).json();
//     }).catch((err) => {console.log(err)})
// })


// Port
const port  =  3080;

app.listen(port, () => console.log(`listening on port ${port}`));