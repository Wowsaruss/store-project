import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import blacksearch from '../../Assets/black-search.png';
import blackcart from '../../Assets/black-cart.png';
import blackUser from '../../Assets/blackUser.png';
import {connect} from 'react-redux';

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
                            <Link to='/search' ><img className='search-icon' src={blacksearch} alt='' /></Link>                           
                            <a href={`${process.env.REACT_APP_HOST}/auth`}><img className='user-icon' src={blackUser} alt='' /></a>
                            <Link to='/cart' ><img className='cart-icon' src={blackcart} alt='' />
                    <div className='badge' >
                                ({
                                    this.props.Cart.reduce((sum, item) => {
                                        return sum + (item.qty)
                                    },0)
                                })
                            </div>
                            </Link>
                   </div>

                </div>
            </div>
        )
    }    
}

function mapStateToProps(state) {
    return {
        Cart: state.Cart
    }
}

export default connect(mapStateToProps)(NavBar);
