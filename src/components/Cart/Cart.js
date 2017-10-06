import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../../redux/reducer';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Cart.css';


// export function Cart( { checkout, history, productsInCart } ) {
//   const products = productsInCart.map( product => (
//     <CartItem
//       key={ product.id }
//       logo={ product.logo }
//       name={ product.name }
//       price={ product.price }
//     />
//   ) );
//   const cartTotal = productsInCart.reduce( ( total, { price } ) => total + price, 0 );


class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      order: []
    }
  }

  componentDidMount() {
    axios.post('/api/submit_order').then(res => {
      this.setState({
        productList: res.data
      })
    })
  }

  render() {
    let shoppingCartDisplay = this.props.Cart.map((product, i) => {
    return (
      <div key={i} className='item-display' >
        

         <table>
                  <tr>
                    <th>PRODUCT</th>
                    <th></th>
                    <th>PRICE</th>
                    <th>SIZE</th>
                    <th>QTY</th>
                    <th>REMOVE</th>
                    <th>TOTAL</th>
                  </tr>
                  <tr>
                    <td><img className='cart-image-style' src={product.imageurl} alt="" /></td>
                    <td><h4>{product.productname}</h4></td>
                    <td><h2>${product.productprice}</h2></td>
                    <td>???</td>
                    <td><form>
                      <input type="number" value=""/>
                    </form></td>
                    <td><button onClick={() => this.props.removeFromCart(i)}>REMOVE</button></td>
                    <td><h2>${product.productprice}</h2></td>
                  </tr>
         </table>


      </div>
    )
  })
    return (
         <div>
           <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" />
                   <div>
                    <Link to='/' >
                    <h1 className='logo-font' >COPPER BLOOM</h1>
                    </Link>
                  </div>
                {shoppingCartDisplay[0] ? 
                shoppingCartDisplay: 
                <div>
                  <h1>Your shopping cart is empty!  Go add something!</h1>
                </div>
                }
                <button >CHECKOUT</button>
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