import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../../redux/reducer';

import './Cart.css';

class Cart extends Component {

  render() {
    let shoppingCartDisplay = this.props.Cart.map((product, i) => {
    return (
      <div key={i} className='item-display' >
          <img className='cart-image-style' src={product.imageurl} alt="" />
            <div>
              <h4>{product.productname}</h4>
              <h2>${product.productprice}</h2>
            <div>
              <button onClick={() => this.props.removeFromCart(i)}>Remove From Cart</button>
            </div>
         </div>
      </div>
    )
  })
    return (
         <div>
                {shoppingCartDisplay[0] ? 
                shoppingCartDisplay: 
                <div>
                  <h1>Your shopping cart is empty!  Go add something!</h1>
                </div>
                }
                <button>CHECKOUT</button>
         </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return {
      Cart: state.Cart
  };
}

export default connect(mapStateToProps, {removeFromCart})(Cart);