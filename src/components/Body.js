import React,{useState} from 'react';

const Body=({image,title,price,updateTotalAmount,index, removeItem,updateTotalQuantity })=>{
    const [quantity, setQuantity] = useState(1);

   const increaseQuantity = () => {
    setQuantity(quantity + 1);
    updateTotalAmount(parseInt(price.replace(/[₹,]/g, ''), 10));
    handleQuantityChange(1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateTotalAmount(-parseInt(price.replace(/[₹,]/g, ''), 10)); 
      handleQuantityChange(-1);

    }
  };
  const handleRemove = () => {
    removeItem(index);
  };
  const handleQuantityChange = (change) => {
    updateTotalQuantity((prevQuantity) => prevQuantity + change);
  };
    return(
        <div className='bodyContainer'>
            <main class='heroSection'>
            <div className='itemCard'>
                <img src={image}></img>
                <div className='itemDeatails'>
                    <h3>{title}</h3>
                    <p>{price}</p>
                    <button className='delButton' onClick={handleRemove}>Remove</button>
                </div>
                <div class='updateButton'>
                <button className='incButton' onClick={increaseQuantity}>+</button>
                    <p>{quantity}</p>
                    <button className='decButtons' onClick={decreaseQuantity}>-</button>
                </div>
                   
                </div>
            
            </main>
           
        </div>
    )
}

export default Body;