import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';
import facebook from '../../Assets/facebook.svg';
import instagram from '../../Assets/instagram.svg';
import pinterest from '../../Assets/pinterest.svg';
import twitter from '../../Assets/twitter.svg';

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
                   <div>
                        <div className='social-list' >
                            <a href='http://pinterest.com' ><img src={pinterest} className='social-icons' alt='' /></a>
                            <a href='http://facebook.com' ><img src={facebook} className='social-icons' alt='' /></a>
                            <a href='http://instagram.com' ><img src={instagram} className='social-icons' alt='' /></a>
                            <a href='http://twitter.com' ><img src={twitter} className='social-icons' alt='' /></a>
                        </div>
                   </div>
                   COPYRIGHT © 2017 COPPER BLOOM
                </div>
            </div>
        )
    }    
}
export default Footer;
