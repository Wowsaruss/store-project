import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {addToCart} from '../../redux/reducer';
import {Link} from 'react-router-dom';


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
      <div >
        <div>
          <Link to='/' >
          <h1 className='logo-font' >COPPER BLOOM</h1>
          </Link>
        </div>
        <div className='outer-div'>
                <h2 className='product-detail-title' >{this.state.product.productname}</h2>
                <hr />
                <div className='div-align' >
                    <div>
                        <img className='detail-image-style' src={this.state.product.imageurl} alt='' />
                    </div>
                    <div>
                        <h2>${this.state.product.productprice}</h2>
                        <button className='checkout' onClick={(e) => this.props.addToCart(this.state.product)}>ADD TO CART</button>
                        <hr/>
                        <div className='details-description' >
                          <p>{this.state.product.description}</p>
                        </div>
                        <hr/>
                    </div>
                </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {addToCart})(Details);