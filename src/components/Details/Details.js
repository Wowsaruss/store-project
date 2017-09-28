import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {addToCart} from '../../redux/reducer'

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
          <h2>{this.state.product.productname}</h2>
          <hr/>
          <img className='detail-image-style' src={this.state.product.imageurl} alt='' />
          <p>${this.state.product.productprice}</p>
          <p>{this.state.product.description}</p>
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