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

    render() {

     const products = this.state.productList.map(function(product, i) {
              return(
              <div key={i}>
                  <div>
                      <h3>
                        {product.productname}
                      </h3>
                      <h4>
                        ${product.productprice}
                      </h4>
                  </div>
                  
                    <div>
                    <Link to={`/details/${product.productid}`} ><img className='image-size' src={product.imageurl} alt='' /></Link>
                    </div>
              </div>
              )
            })

    return (
      <div>
        <div>
          <h1 >Shop!</h1>
        </div>
        <div>
          {products}
        </div>
      </div>
    )
  }
}

export default Shop;