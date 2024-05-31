import React, { useState, useEffect } from 'react';
import mana1 from '../assets/images/mana1.jpeg';
import mana2 from '../assets/images/mana2.jpeg';
import mana3 from '../assets/images/mana3.jpeg';
import mana4 from '../assets/images/mana4.jpeg';
import mana5 from '../assets/images/mana5.jpeg';
import '../css/imagegallery.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    
      <div className='carousel'>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
       <h2><center>AUTOMATED WEATHER MONITORING SYSTEM</center></h2>
        
      </div>
    
  );
};

class ImageGrid extends React.Component {
  render() {
    const images = [mana5, mana1, mana2, mana3, mana4];

    return (
      <ImageCarousel images={images} />
    );
  }
}

export default ImageGrid;
