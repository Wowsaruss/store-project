import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import './NewArrivals.css';

class NewArrivals extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newArrivals: []
    }
  }

componentDidMount() {
  axios.get('http://localhost:3000/api/new_arrivals').then(res => {
    this.setState({
      newArrivals: res.data
    })
  })
}

  render() {
    const newArrivals = this.state.newArrivals.map(function(newArrivals, i) {
    return (
              <div key={i}>

<div className='container' >

                              <div className='divsize' >
                                <img className='imgsize' src={newArrivals.imageurl} alt='' />
                              </div>

                              <div className='overlay' >
                                  <Link to={`/details/${newArrivals.productid}`} >
                                    <div className='text' >
                                      <hr/>
                                        {newArrivals.productname}<br />
                                      <hr/>
                                        ${newArrivals.productprice}
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
                <div>
                  <div className='product-flex' >{newArrivals}</div>
                </div>
              </div>
            )
          }
        }

export default NewArrivals;