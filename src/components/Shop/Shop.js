import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


import './Shop.css';

class Shop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: []
    }
  }

componentDidMount() {
  axios.get('http://localhost:3000/api/home_products').then(res => {
    this.setState({
      productList: res.data
    })
  })
}
// componentDidMount() {
//   this.props.pinToBoard();
// }

    render() {

     const products = this.state.productList.map(function(product, i) {
              return(
              <div key={i}>

                  <div className="container">

                              <div className='divsize' >
                                <img className='imgsize' src={product.imageurl} alt='' />
                              </div>

                              <div className="overlay">
                                <Link to={`/details/${product.productid}`} >
                                    <div className="text">
                                      <hr/>
                                        {product.productname}<br />
                                      <hr/>
                                        ${product.productprice}
                                    </div>
                                  </Link>
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
        <h2 className='page-header' >SHOP</h2>
        <hr/>
        <div>
          <div className='product-flex' >{products}</div>
        </div>
      </div>
    )
  }
}

export default Shop;