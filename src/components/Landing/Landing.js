import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import './Landing.css';
import HeroImage from '../../Assets/HeroImage.jpg';

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
                  <div>
                      <h3>
                        {product.productname}
                      </h3>
                      <h4>
                        ${product.productprice}
                      </h4>
                  </div>
                  
                    <div>
                    <Link to={`/details/${product.productid}`} ><img className='product-image-style' src={product.imageurl} alt='' /></Link>
                    </div>
                  
              </div>
              )
            })


    return (
        <div>

            <div>

                  <div className='hero-props' >                    
                        <h1 className='hero-text'>Copper Ln.</h1>
                        <img className='hero-image' src={HeroImage} alt='' />                     
                  </div>

                  <div className='product-allign' >
                    {products}
                  </div>

            </div>
        </div>
    )
  }
}

export default Landing;