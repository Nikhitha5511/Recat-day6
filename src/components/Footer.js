import React,{useState} from 'react';

const Footer=()=>{
    const [amount, setAmount] = useState(100); // Initial amount

    const incrementAmount = () => {
      setAmount(amount + 1);
    };
  
    const decrementAmount = () => {
      if (amount > 0) {
        setAmount(amount - 1);
      }
    };
    return(
        <div className='footer'>
            <hr></hr>
            <div className='content'>
                <p>Total</p>
                <button className='clearButton' onIncrement={incrementAmount} onDecrement={decrementAmount}>Clear cart</button>
                <p>{amount}</p>
            </div>
        </div>
    )
}

export default Footer;