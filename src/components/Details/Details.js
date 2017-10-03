import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {addToCart} from '../../redux/reducer';
import {Link} from 'react-router-dom';

import './Details.css';

class Details extends Component {
  constructor(props) {
    super(props) 

      this.state = {
        product: []
      }
    }

    componentDidMount() {
      axios.get(`/api/product_details/${this.props.match.params.id}`).then(res => {
        this.setState({
          product: res.data
        })
      })
    }

  render() {
  
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" />
        <div>
          <Link to='/' >
          <h1 className='logo-font' >COPPER BLOOM</h1>
          </Link>
        </div>
          <h2>{this.state.product.productname}</h2>
          <hr/>
          <img className='detail-image-style' src={this.state.product.imageurl} alt='' />
          <p>${this.state.product.productprice}</p>
          <p>{this.state.product.description}</p>
          <form>
            <select>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </form>
          <button onClick={() => this.props.addToCart(this.state.product)} >ADD TO CART</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {addToCart})(Details);