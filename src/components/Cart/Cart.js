import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../../redux/reducer';

import './Cart.css';

class Cart extends Component {

  render() {
    let shoppingCartDisplay = this.props.Cart.map((product, i) => {
    return (
      <div key={i}>
          <img className='cart-image-style' src={product.imageurl} alt="" />
           <div>
              <h2>{product.productname}</h2>
              <h2>${product.productprice}</h2>
             <div>
               <button onClick={() => this.props.removeFromCart(i)}>Remove From Shopping Cart</button>
            </div>
         </div>
      </div>
    )
  })
    return (
         <div>
                {shoppingCartDisplay[0] ? 
                shoppingCartDisplay: <div className="go-buy-something"><h1>Your shopping cart is empty!  Go add something!</h1></div>}
         </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      Cart: state.Cart
  };
}

export default connect(mapStateToProps, {removeFromCart})(Cart);