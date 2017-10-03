import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import './NewArrivals.css';

class NewArrivals extends Component {
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
    return (
      <div key={i}>
        <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" />
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
                  <Link to='/' >
                  <h1 className='logo-font' >COPPER BLOOM</h1>
                  </Link>
                </div>
                <div>
                  {products}
                </div>
              </div>
            )
          }
        }

export default NewArrivals;