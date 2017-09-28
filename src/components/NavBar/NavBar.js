import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css';
import ShoppingCart from '../../Assets/ShoppingCart.png';
import Search from '../../Assets/Search.png';

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
                    <div className='announcement-bar' >
                            <p className='announcement-text' >Free shipping on all orders over $50!</p>
                    </div>
                    <div className='nav-link-bar' id='navbar' >                       
                            <a><Link to='/shop' >SHOP</Link></a>
                            <a><Link to='/newarrivals' >NEW ARRIVALS</Link></a>
                            <a><Link to='/dresses'>DRESSES</Link></a>
                            <a><Link to='/onsale'>ON SALE</Link></a>
                            <a><Link to='/sizing'>SIZING</Link></a>
                            <a><Link to='/contact+support' >CONTACT + SUPPORT</Link></a>  
                   </div>
                   <div className='icon-links' >
                            <Link to='/account'><img className='icon' src={ShoppingCart} alt='' /></Link>
                            <Link to='/cart' ><img className='icon' src={ShoppingCart} alt='' /></Link>
                            <Link to='/search' ><img className='icon' src={Search} alt='' /></Link> 
                   </div>
                </div>
            </div>
        )
    }    
}
export default NavBar;