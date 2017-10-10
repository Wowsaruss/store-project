import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Dresses.css';

class Dresses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dressesList: []
    }
  }

componentDidMount() {
  axios.get('http://localhost:3000/api/dresses').then(res => {
    this.setState({
      dressesList: res.data
    })
  })
}

  render() {
    const dresses = this.state.dressesList.map(function(dresses, i) {
    return (
              <div key={i}>
                

                      <div className='container' >

                              <div className='divsize' >
                                <img className='imgsize' src={dresses.imageurl} alt='' />
                              </div>

                              <div className='overlay' >
                                  <Link to={`/details/${dresses.productid}`} >
                                    <div className='text' >
                                      <hr/>
                                        {dresses.productname}<br />
                                      <hr/>
                                        ${dresses.productprice}
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
                <hr/>
                <div>
                   <div className='product-flex' >{dresses}</div>
                </div>
              </div>
            )
          }
        }

export default Dresses;