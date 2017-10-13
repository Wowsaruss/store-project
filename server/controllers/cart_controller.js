module.exports = {
    
    checkuser:() => {
        const db = req.app.get('db');
        db.get_cart([1]).then((cart) => {
          if(cart[0]){
            console.log('found cart!')
          } else {
              console.log('not found')
          }       
        })
    },

    addToCart:(req,res) => {
        const db = req.app.get('db');
        const {userid, productid} = req.body;
        db.get_cart([userid]).then((cart) => {
            if(cart[0]){
             db.check_duplicates([productid, cart[0].id]).then((dup) => {
                if(dup[0]){
                    console.log(dup[0].qty)
                    db.update_quantity([dup[0].qty + 1, dup[0].productid]).then(() => {
                     db.return_cart([cart[0].id]).then((cartItems) => {
                         res.send(cartItems)
                     })
                       
                    })
                    console.log("duplicate!")
                } else {
                    db.add_to_cart([productid, cart[0].id]).then(() => {
                        db.return_cart([cart[0].id]).then((cartItems) => {
                            res.send(cartItems)
                        })
                    })
                 }
             })
            } else {
                db.make_order([userid]).then(() => {
                    db.get_cart([userid]).then((cart) => {
                        db.add_to_cart([productid, cart[0].id]).then(() => {
                            db.return_cart([cart[0].id]).then((cartItems) => {
                                res.send(cartItems)
                            })
                        })
                    })
                })
            } 
        })
    }
}