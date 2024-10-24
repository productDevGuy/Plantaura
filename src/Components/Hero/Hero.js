import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import './Hero.css';
import { gsap } from 'gsap';

function Hero() {
  const images = useMemo(() => [
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1729653175/2151729550_n0asjw.jpg',
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1729748832/2151801651_g2rwxj.jpg',
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1729653180/2151729575_syaihh.jpg'
  ], []);

  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  // References for animated elements
  const heroBoxRef = useRef(null);
  const expoRef = useRef(null);
  const switchRef = useRef(null);

  // Function to handle image change
  const changeImage = useCallback((index) => {
    setActiveImage(images[index]);
    setActiveIndex(index);
  }, [images]);

  // Auto image switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      changeImage(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, images.length, changeImage]);

  // Handle manual image click
  const handleImageClick = (index) => {
    changeImage(index);
  };

  // GSAP Animation
  useEffect(() => {
    const animateElements = (entry, observer) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          heroBoxRef.current, 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );
        gsap.fromTo(
          expoRef.current, 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );
        gsap.fromTo(
          switchRef.current, 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );
        
        // Stop observing once the animation has been triggered
        observer.unobserve(entry.target);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => animateElements(entry, observer));
    }, { threshold: 0.1 });

    // Observe elements
    if (heroBoxRef.current) observer.observe(heroBoxRef.current);
    if (expoRef.current) observer.observe(expoRef.current);
    if (switchRef.current) observer.observe(switchRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className='hero' style={{ backgroundImage: `url(${activeImage})` }}>
      <div className='content'>
        <div className='navbar'>
          <div className='logo'>
            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729669750/Group_1686553376_zzioph.png' alt='' />
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
          <h2 data-animation='header'>Designing a Greener Tomorrow, Today.</h2>
          <p>
            Creating eco-friendly, sustainable design solutions that reduce environmental impact while maintaining creativity and innovation.
          </p>
          <div className='hero-box' ref={heroBoxRef}>
            <div className='hero-cta'>
              <div className='cta-item'>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729668307/icons8-house-64_cjzirt.png' alt='' />
              </div>
              <span>Green House</span>
            </div>
            <div className='hero-cta'>
              <div className='cta-item'>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729668567/icons8-affiliate-64_vh47lq.png' alt='' />
              </div>
              <span>Green Affiliates</span>
            </div>
            <div className='hero-cta'>
              <div className='cta-item'>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729668142/icons8-analytics-64_rg2wla.png' alt='' />
              </div>
              <span>Statistics</span>
            </div>
            <button>Get Free Consultation</button>
          </div>
        </div>

        <div className='hero-nav'>
          <div className='expo-con' ref={expoRef}>
            <div className='expo'>
              <p>42+</p>
              <span>Green Projects</span>
            </div>
            <div className='expo'>
              <p id='star'>*****</p>
              <span>Trusted by our clients</span>
            </div>
          </div>
          <div className='switch' ref={switchRef}>
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
