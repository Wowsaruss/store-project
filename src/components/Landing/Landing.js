import React, {Component} from 'react';
import axios from 'axios';

import './Landing.css';

class Landing extends Component {
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
                <li>{product.productname}</li>
                <li>{product.imageurl}</li>
              </div>
              )
            })


    return (
        <div>
           <div>
              <div>
                 <div>
                    <h1>Desert Bloom</h1>
                    <button>Shop Now</button>
                 </div>
                 {products}
              </div>
           </div>
        </div>
    )
  }
}

export default Landing;