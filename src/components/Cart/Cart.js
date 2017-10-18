import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../../redux/reducer';
import {Link} from 'react-router-dom';
import Trash from '../../Assets/Trash.png';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      order: []
    }
    this.onToken=this.onToken.bind(this);
  }

  // componentDidMount() {
  //   axios.post('/api/submit_order').then(res => {
  //     this.setState({
  //       productList: res.data
  //     })
  //   })
  // }

  // deleteItem(productId) {
  //   axios.delete(`/api/cart/${productId}`).then((myOrder) => {
  //     this.setState({
  //       order: myOrder.data
  //     });
  //   });
  // }


  onToken(token) {
    token.card = void 0;
    console.log('token', this.state);
    axios.post('/api/payment', { token, amount: 0.00, options: this.state} ).then(response => {
      alert('we are in business')
    });
  }

  render() {
    const subtotal = this.props.Cart.reduce((sum, item) => {
      return sum + (item.productprice * item.qty);
    },0.00)
    const total = (subtotal * .085) + subtotal;
    let shoppingCartDisplay = this.props.Cart.map((product, i) => {
    return (
      <div key={i} className='item-display' >
        

         <div className='common-font' >

                  <div className='cart-display' >
                        <div>
                          <Link to={`/details/${product.productid}`}><img className='cart-image-style' src={product.imageurl} alt="" /></Link>
                        </div>

                        <div>
                          <h4>{product.productname}</h4>
                        </div>

                        <div>
                          <h2>${product.productprice}</h2>
                        </div>

                        <div>
                          <select>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                          </select>
                        </div>

                        <div>
                          <form><input type="number" name="quantity" min="1" placeholder='1' max="" /></form>
                        </div>

                        <div>
                          <a onClick={(e) => this.props.removeFromCart(product.productid)}><img className='cart-trash' src={Trash} alt='' /></a>
                        </div>

                        <div>
                          <h2 className='common-font' >${product.productprice}</h2>
                        </div>
                  </div>
         </div>


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

                  <div className='cart-display common-text' >
                    <div><h2>PRODUCT</h2></div>
                    <div><h2> </h2></div>
                    <div><h2>PRICE</h2></div>
                    <div><h2>SIZE</h2></div>
                    <div><h2>QTY</h2></div>
                    <div><h2>REMOVE</h2></div>
                    <div><h2>TOTAL</h2></div>
                  </div>

                  <hr />

                  {shoppingCartDisplay[0]
                  ?
                  shoppingCartDisplay
                  : 
                  <div className='common-text empty-cart' >
                    <h1>Your shopping cart is empty!  Go add something!</h1>
                  </div>}

                  <hr />

                  

                  <div className='total common-text' >
                    <h2>SUBTOTAL: ${subtotal}</h2>
                    <h1>TOTAL: ${total}</h1>
                  </div>

                  <div className='checkout-button common-text' >
                    <button className='checkout' >UPDATE</button>
                    <button className='checkout' >CHECKOUT</button>
                  </div>

                  <div className='logout-button' >
                      <a href={`${process.env.REACT_APP_HOST}/auth`}><button className='login-button'>LOGIN // REGISTER</button></a>
                  </div>

                <div className='stripe-checkout' >
                  <div>
                      <StripeCheckout
                          token={this.onToken}
                          stripeKey={ process.env.REACT_APP_STRIPEKEY }
                          amount={total * 100}
                      />
                  </div>
                </div>

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