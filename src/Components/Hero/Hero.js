import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Hero.css';

function Hero() {
  // Use useMemo to memoize the images array so it's not recreated on every render
  const images = useMemo(() => [
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1729653175/2151729550_n0asjw.jpg',
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1729653177/2151196455_e1k5im.jpg',
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1729653180/2151729575_syaihh.jpg'
  ], []);

  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle image change (manual or auto) - using useCallback to prevent recreation on every render
  const changeImage = useCallback((index) => {
    setActiveImage(images[index]);
    setActiveIndex(index);
  }, [images]);

  // Auto image switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length; // Cycle through images
      changeImage(nextIndex);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [activeIndex, images.length, changeImage]);

  // Handle manual image click
  const handleImageClick = (index) => {
    changeImage(index);
  };

  return (
    <div className='hero' style={{ backgroundImage: `url(${activeImage})` }}>
      <div className='content'>
         <div className='navbar'>
            <div className='logo'>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729669750/Group_1686553376_zzioph.png' alt=''></img>
                <p>Plantaura</p>
            </div>

            <nav>
                <li>About Us</li>
                <li>Innovation</li>
                <li>Reviews</li>
            </nav>

            <div className='nav-btn'>
            <span>Contact Us</span>
            <button>Schedule Call</button>
            </div>
         </div>
        <div className='hero-con'>
          <h2>Designing a Greener Tomorrow, Today.</h2>
          <p>Creating eco-friendly, sustainable design solutions that reduce environmental impact while maintaining creativity and innovation.</p>

          <div className='hero-box'>
            <div className='hero-cta'>
                <div className='cta-item' >
                    <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729668307/icons8-house-64_cjzirt.png' alt=''></img>
                </div>
               <span>Green House</span>
            </div>

            <div className='hero-cta'>
                <div className='cta-item' >
                    <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729668567/icons8-affiliate-64_vh47lq.png' alt=''></img>
                </div>
               <span>Green Affiliates</span>
            </div>

            <div className='hero-cta'>
                <div className='cta-item' >
                    <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729668142/icons8-analytics-64_rg2wla.png' alt=''></img>
                </div>
               <span>Statistics</span>
            </div>

            <button>Get Free Consultation</button>
          </div>
        </div>

        <div className='hero-nav'>
          <div className='expo-con'>
            <div className='expo'>
              <p>42+</p>
              <span>Green Projects</span>
            </div>

            <div className='expo'>
              <p id='star'>*****</p>
              <span>Trusted by our clients</span>
            </div>
          </div>

          <div className='switch'>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=''
                onClick={() => handleImageClick(index)}
                className={activeIndex === index ? 'active' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
