import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../../redux/reducer';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Cart.css';


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
                    <td><select>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select></td>
                    <td><form><input type="number" name="quantity" min="1" placeholder='1' max="" /></form></td>
                    <td><button onClick={() => this.props.removeFromCart(i)}>REMOVE</button></td>
                    <td><h2>${product.productprice}</h2></td>
                  </tr>
         </table>


      </div>
    )
  })
    return (
         <div>
                   <div>
                    <Link to='/' >
                    <h1 className='logo-font' >COPPER BLOOM</h1>
                    </Link>
                  </div>
                {shoppingCartDisplay[0] ? 
                shoppingCartDisplay: 
                <div className='empty-cart' >
                  <h1>Your shopping cart is empty!  Go add something!</h1>
                </div>
                }
                <hr />
                <div className='checkout-button' >
                  <button className='checkout' >UPDATE</button>
                  <button className='checkout' >CHECKOUT</button>
                </div>
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