import React,{useState} from 'react';
import {useEffect} from 'react';
const Body=({image,title,price})=>{
    const [quantity, setQuantity] = useState(1);
    const [totalCost, setTotalCost] = useState(0);



   const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
    return(
        <div className='bodyContainer'>
            <main class='heroSection'>
            <div className='itemCard'>
                <img src={image}></img>
                <div className='itemDeatails'>
                    <h3>{title}</h3>
                    <p>{price}</p>
                    <button className='delButton'>Remove</button>
                </div>
                <div classname='updateButtons'>
                    <button className='incButton' onClick={increaseQuantity}>+</button>
                    <p>{quantity}</p>
                    <button className='decButton' onClick={decreaseQuantity}>-</button>
                </div>
            </div>
            </main>
           
        </div>
    )
}

export default Body;