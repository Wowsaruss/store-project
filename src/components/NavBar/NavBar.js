import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './NavBar.scss';
// import ShoppingCart from '../../Assets/ShoppingCart.png';
// import Search from '../../Assets/Search.png';

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
                    <div>
                        
                            
                            <Link to='/account'>Account</Link>
                            <Link to='/cart' >Cart</Link>
                            <Link to='/search' >Search</Link>
                        
                    </div>
                    <div>                       
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
export default NavBar;