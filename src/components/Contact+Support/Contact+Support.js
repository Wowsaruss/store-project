import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class ContactSupport extends Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" />
        <div>
          <Link to='/' >
          <h1 className='logo-font' >COPPER BLOOM</h1>
          </Link>
        </div>
        <div className='sizing-parent' >
            <h2>QUESTIONS? WE CAN HELP.</h2>
            <hr />
            <h4>-For all general inquiries, call us at 623-693-3758 or email: info@copper-bloom.com</h4>
            <h4>For questions about collaborations, email: collaborations@opper-bloom.com</h4>
            <h4>Delivery questions? Click here</h4>
            <h4>Returns questions? Click here</h4>

            <h2>Copper Bloom</h2>
            <h4>6901 N 185th Ave</h4>
            <h4>Waddell, AZ 85355.</h4>
            
            <h2>Hours of Operation:</h2>
            <h4>Monday - Friday 10am-6pm</h4>
            <h4>Saturday 10am-4pm</h4>
            <h4>Sunday CLOSED</h4>
        </div>
      </div>
    )
  }
}

export default ContactSupport;