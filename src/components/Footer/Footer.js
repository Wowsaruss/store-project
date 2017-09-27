import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
    
        }
      }

    render(){
        return (
            <div>
                <div>
                    <div>                      
                            <Link to='/account'>Account</Link>
                            <Link to='/cart' >Cart</Link>
                            <Link to='/search' >Search</Link>                     
                            <Link to='/shop' >Shop</Link>
                            <Link to='/newarrivals' >New Arrivals</Link>
                            <Link to='/dresses'>Dresses</Link>
                            <Link to='/onsale'>On Sale</Link>
                            <Link to='/sizing'>Sizing</Link>
                            <Link to='/contact+support' >Contact + Support</Link>        
                   </div>
                </div>
            </div>
        )
    }    
}
export default Footer;
