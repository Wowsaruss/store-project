// using .env file
require('dotenv').config();

// imports
const cors = require('cors')
    , express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0');
const app = express();
const port  =  3080;

// Controllers
const cart_controller = require('./controllers/cart_controller');
const products_controller = require('./controllers/products_controller');

// cors / body-parser
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

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

// beginning

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
        db.get_user([profile.identities[0].user_id]).then( user => {
            if (user[0]) {
                done(null, user[0].id)
            } else {
                db.create_user([
                    profile.emails[0].value,
                    profile.identities[0].user_id]).then( user => {
                        done(null, user[0].id)
                    })
            }})
      }))

passport.serializeUser(function(userId, done) {
    done(null, userId);
})
passport.deserializeUser( function( userId, done) {
    app.get('db').current_user(userId).then(user => {
            done(null, user[0])
    })
})
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0',{
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: '/auth'
}))

app.get('/auth/logout', (req,res) => {
    req.logOut();
    res.redirect(302, 'https://russhayes.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost%3A3000%2F&client_id=H1mIr30Ql159cjDXYPz8LXFwzFpqifnG')
})

app.get('/api/user',  passport.authenticate('auth0'), (req, res) => {
    req.app.get('db').current_user().then(user =>{
        res.status(200).send(user)
    }).catch((err) => {console.log(err)})
})

// end





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