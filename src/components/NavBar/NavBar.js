import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
            <div className='sticky-nav' >
                <div>

                    <div className='nav-bar' >
                        <div className='nav-link-bar common-text'>
                                <Link to='/shop' >SHOP</Link>
                                <Link to='/newarrivals' >NEW ARRIVALS</Link>
                                <Link to='/dresses'>DRESSES</Link>
                                <Link to='/onsale'>ON SALE</Link>
                                <Link to='/sizing'>SIZING</Link>
                                <Link to='/contact+support' >CONTACT + SUPPORT</Link>  
                        </div>
                        <hr/>
                   </div>
                   <div className='icon-position' >
                            <Link to='/account'><img className='user-icon' src={blackUser} alt='' /></Link>
                            <Link to='/cart' ><img className='cart-icon' src={blackcart} alt='' /><span className="badge">(5)</span></Link>
                            <Link to='/search' ><img className='search-icon' src={blacksearch} alt='' /></Link> 
                   </div>
                </div>
            </div>
        )
    }    
}
export default NavBar;