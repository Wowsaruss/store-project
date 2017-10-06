import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: []
    }
  }

componentDidMount() {
  axios.get('/api/home_products').then(res => {
    this.setState({
      productList: res.data
    })
  })
}

    render() {

     const products = this.state.productList.map(function(product, i) {
              return(
              <div key={i}>

                       <div className='container' >

                              <div className='divsize' >
                                <img className='imgsize' src={product.imageurl} alt='' />
                              </div>

                              <div className='overlay' >
                                  <Link to={`/details/${product.productid}`} >
                                    <div className='text' >
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
                  <div className='hero-props bg' >                    
                        <h1 className='hero-text'>COPPER BLOOM</h1>
                        <img className='hero-image' alt='' />
                  </div>

                  <div >
                      <div className='product-flex' >{products}</div>
                  </div>

            </div>
        </div>
    )
  }
}

export default Landing;