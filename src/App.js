
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mainContainer">
      <Header/>
      <Hero/>
     <Body
    image='https://www.course-api.com/images/cart/phone-2.png' alt='phone'
    title='Samsung Galaxy S8'
    price='₹9,899'
    quantity='1'
     
     />
      <Body
    image='https://m.media-amazon.com/images/I/31YplruUtZL._AC_SR320,320_.jpg' alt='phone'
    title='KADENCE V100S '
    price='₹5,899'
    quantity='1'

     />
      <Body
    image='https://rukminim2.flixcart.com/image/612/612/xif0q/acoustic-guitar/b/d/c/string-acoustic-guitar-learning-kids-toy-fbox-original-imagmb65fzxxfa9s.jpeg?q=70' alt='phone'
    title='ZIXUAN Acoustic Guitar '
    price='₹4,899'
    quantity='1'
     
     />
      <Body
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fXBem4mQb5kLrDhM3GJcVgmajzgguKr4my137ctQJmXhuK5jKchH_bWUk0KX1QgA-FY&usqp=CAU' alt='phone'
    title='Alloy Beads Coated Bracelet'
    price='₹10,000'
    quantity='1'
     
     />
      <Body
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMIGjUI3PcQTOacFfEU7wNj6kM9autpy1zA&usqp=CAU' alt='phone'
    title='Fire-Boltt Ninja Pro Max'
    price='₹4,000'
    quantity='1'
     
     />
     <Footer amount='₹37,599'/>
    </div>
  );
}

export default App;
