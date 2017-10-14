import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


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
    console.log(this.state);
    const arrival = this.state.newArrivals.map(function(newArrivals, i) {
    return (
              <div key={i}>
                        <div className='container' >

                              <div className='divsize' >
                                 <img className='imgsize' src={arrival.imageurl} alt='' />
                              </div>

                              <div className='overlay' >
                                   <Link to={`/details/${arrival.productid}`} >
                                     <div className='text' >
                                       <hr/>
                                         {arrival.productname}<br />
                                       <hr/>
                                         ${arrival.productprice}
                                     </div>
                                   </Link>
                              </div>

                        </div>
              </div>
              );
          });

            return (
              <div>
                <div>
                  <Link to='/' >
                  <h1 className='logo-font' >COPPER BLOOM</h1>
                  </Link>
                </div>
                <h2 className='page-header' >NEW ARRIVALS</h2>
                <hr/>
                <div>
                  {<div className='product-flex' >{arrival}</div>}
                </div>
              </div>
            );
          }
        }

export default NewArrivals;