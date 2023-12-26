
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import {useState} from 'react';


function App() {
  const [cartItems, setCartItems] = useState([
    {
      image: 'https://www.course-api.com/images/cart/phone-2.png',
      title: 'Samsung Galaxy S8',
      price: '₹9,899',
      quantity: '1',
    },
    {
      image: 'https://m.media-amazon.com/images/I/31YplruUtZL._AC_SR320,320_.jpg',
      title: 'KADENCE V100S',
      price: '₹5,899',
      quantity: '1',
    },
    {
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/acoustic-guitar/b/d/c/string-acoustic-guitar-learning-kids-toy-fbox-original-imagmb65fzxxfa9s.jpeg?q=70',
      title: 'ZIXUAN Acoustic Guitar ',
      price: '₹4,899',
      quantity: '1',
    },
    
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fXBem4mQb5kLrDhM3GJcVgmajzgguKr4my137ctQJmXhuK5jKchH_bWUk0KX1QgA-FY&usqp=CAU',
      title: 'Alloy Beads Coated Bracelet',
      price: '₹10,000',
      quantity: '1',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMIGjUI3PcQTOacFfEU7wNj6kM9autpy1zA&usqp=CAU',
      title: 'Fire-Boltt Ninja Pro Max',
      price: '₹4,000',
      quantity: '1',
    }
  ]);

  const [totalAmount, setTotalAmount] = useState(34977); 

  const updateTotalAmount = (priceChange) => {
    setTotalAmount(prevAmount => prevAmount + priceChange);
  };
  const [cartEmpty, setCartEmpty] = useState(false);

  const clearCart = () => {
    setCartItems([]);
    setCartEmpty(true);
  };
  const removeItem = (index) => {
    const updatedItems = [...cartItems];
    const removedItem = updatedItems.splice(index, 1);
    updateTotalAmount(-parseInt(removedItem[0].price.replace(/[₹,]/g, ''), 10));
    setCartItems(updatedItems);
  };
  const [totalQuantity, setTotalQuantity] = useState(4);
  return (
    <div className="mainContainer">
      <Header totalQuantity={totalQuantity}/>
      <Hero/>
      {!cartEmpty &&
        cartItems.map((item, index) => (
          <Body
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            updateTotalAmount={updateTotalAmount}
            removeItem={removeItem}
            updateTotalQuantity={setTotalQuantity}
          />
        ))}
      {cartEmpty && <p class='message'> Your Cart is empty</p>}
      {!cartEmpty && <Footer totalAmount={totalAmount} clearCart={clearCart} />}
    </div>
  );
}

export default App;
