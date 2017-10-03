import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Dresses.css';

class Dresses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dresses: []
    }
  }

componentDidMount() {
  axios.get('http://localhost:3000/api/dresses').then(res => {
    this.setState({
      dresses: res.data
    })
  })
}

  render() {
    const dresss = this.state.dresses.map(function(dress, i) {
    return (
      <div key={i}>
        <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" />
                  <div>
                      <h3>
                        {dress.productname}
                      </h3>
                      <h4>
                        ${dress.productprice}
                      </h4>
                  </div>
                  
                    <div>
                    <Link to={`/details/${dress.productid}`} ><img className='image-size' src={dress.imageurl} alt='' /></Link>
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
                  {dresss}
                </div>
              </div>
            )
          }
        }

export default Dresses;