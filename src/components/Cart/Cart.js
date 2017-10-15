import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../../redux/reducer';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      order: []
    }
  }

  componentDidMount() {
    // axios.post('/api/submit_order').then(res => {
    //   this.setState({
    //     productList: res.data
    //   })
    // })
  }

  // deleteItem(productId) {
  //   axios.delete(`/api/cart/${productId}`).then((myOrder) => {
  //     this.setState({
  //       order: myOrder.data
  //     });
  //   });
  // }

  render() {
    let shoppingCartDisplay = this.props.Cart.map((product, i) => {
    return (
      <div key={i} className='item-display' >
        

         <table className='common-font' >

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
                          <button onClick={(e) => this.props.removeFromCart(product.productid)}>REMOVE</button>
                        </div>

                        <div>
                          <h2 className='common-font' >${product.productprice}</h2>
                        </div>
                  </div>
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

                  <div className='cart-display common-text' >
                    <div><h2>PRODUCT</h2></div>
                    <div><h2></h2></div>
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
                    <h2>SUBTOTAL: ${this.props.Cart.reduce((sum, item) => {
                      return sum + (item.productprice * item.qty)
                    },0.00)
                    }</h2>
                    <h1>TOTAL: ${this.props.Cart.reduce((sum, item) => {
                      return sum + (item.productprice * item.qty)
                    },0.00)
                    }</h1>
                  </div>

                  <div className='checkout-button common-text' >
                    <button className='checkout' >UPDATE</button>
                    <button className='checkout' >CHECKOUT</button>
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