// using .env file
require('dotenv').config();

// imports
const cors = require('cors')
    , express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , stripe = require('stripe')('sk_test_przub5PqVr90sNf3407X6OLM');
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

// AUTH0
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
    successRedirect: 'http://localhost:3000/#/account',
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



// STRIPE
// Beginning
app.post('/api/payment', function (req, res, next) {
console.log('yup this is it', req.body)
const amountArray = req.body.amount.toString().split('');
const pennies = [];
for (var i = 0; i < amountArray.length; i++) {
  if (amountArray[i] === ".") {
    if (typeof amountArray[i + 1] === "string") {
      pennies.push(amountArray[i + 1]);
    } else {
      pennies.push("0");
    }
    if (typeof amountArray[i + 2] === "string") {
      pennies.push(amountArray[i + 2]);
    } else {
      pennies.push("0");
    }
    break;
  } else {
    pennies.push(amountArray[i])
  }
}
const convertedAmt = parseInt(pennies.join(''));
const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.token.id,
  description: 'Test charge from react app'
}, function (err, charge) {
  if (err) return res.sendStatus(500)
});
});
  // End




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