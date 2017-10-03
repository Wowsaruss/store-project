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
                <div className='footer' >
                    <div >                   
                            <li><Link to='/account'>Account</Link></li>
                            <li><Link to='/cart' >Cart</Link></li>
                            <li><Link to='/shop' >Shop</Link></li>
                            <li><Link to='/newarrivals' >New Arrivals</Link></li>
                            <li><Link to='/dresses'>Dresses</Link></li>
                            <li><Link to='/onsale'>On Sale</Link></li>
                            <li><Link to='/sizing'>Sizing</Link></li>
                            <li><Link to='/contact+support' >Contact + Support</Link></li>     
                   </div>

                   <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                    </audio>

                   COPYRIGHT © 2017 COPPER BLOOM
                </div>
            </div>
        )
    }    
}
export default Footer;
