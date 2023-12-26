import React from 'react';

const Footer=({totalAmount,clearCart})=>{
  
    return(
        <div className='footer'>
            <hr></hr>
            <div className='content'>
                <p className='total'>Total</p>
                <button className='clearButtons' onClick={clearCart} >Clear cart</button>
                <p className='amounttotal'>₹{totalAmount}</p>
            </div>
        </div>
    )
}

export default Footer;