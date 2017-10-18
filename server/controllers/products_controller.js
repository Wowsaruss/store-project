module.exports = {

    getProducts: (req, res) => {
        req.app.get('db').get_products().then(products => {
            res.status(200).send(products);
        }).catch((err) => {console.log(err)})
    },
    dresses: (req, res) => {
        req.app.get('db').get_dresses().then(products => {
            res.status(200).send(products);
        }).catch((err) => {console.log(err)})
    },
    productDetails: (req, res) => {
        req.app.get('db').get_product([req.params.productid]).then(product => {
            res.send(product[0]);
        }).catch((err) => {console.log(err)})
    },
    newArrivals: (req, res) => {
        req.app.get('db').new_arrivals().then(products => {
            res.json(products);
            // res.status(200).send(products);
        }).catch((err) => {console.log(err)})
    }

}