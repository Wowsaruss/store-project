import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css';
import blacksearch from '../../Assets/black-search.png';
import blackcart from '../../Assets/black-cart.png';
import blackUser from '../../Assets/blackUser.png';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
    
        }
      }

    render(){
        return (
            <div>
                <div>

                    <div className='nav-bar' >
                    <div className='nav-link-bar'>
                            <a><Link to='/shop' >SHOP</Link></a>
                            <a><Link to='/newarrivals' >NEW ARRIVALS</Link></a>
                            <a><Link to='/dresses'>DRESSES</Link></a>
                            <a><Link to='/onsale'>ON SALE</Link></a>
                            <a><Link to='/sizing'>SIZING</Link></a>
                            <a><Link to='/contact+support' >CONTACT + SUPPORT</Link></a>  
                   </div>
                   </div>
                   <div className='icon-position' >
                            <Link to='/account'><img className='user-icon' src={blackUser} alt='' /></Link>
                            <Link to='/cart' ><img className='cart-icon' src={blackcart} alt='' /></Link>
                            <Link to='/search' ><img className='search-icon' src={blacksearch} alt='' /></Link> 
                   </div>
                </div>
            </div>
        )
    }    
}
export default NavBar;