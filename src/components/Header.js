import React from 'react';
import {useState} from 'react';

const Header=({totalQuantity})=>{
    
    return(
        <header>
                <h2>Ecommerce</h2>
                <i className="fas fa-shopping-cart"></i>
                {totalQuantity > 0 && <span className="cartCount">{totalQuantity}</span>}
            </header>
    )
}

export default Header;