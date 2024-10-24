import React, { useEffect } from 'react';
import './Service.css';

function Service() {
    useEffect(() => {
        const serviceBoxes = document.querySelectorAll('.service-box');

        const observerOptions = {
            threshold: 0.1, // Trigger when 10% of the element is in view
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add class to trigger animation
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        serviceBoxes.forEach(box => {
            observer.observe(box); // Start observing each box
        });

        return () => {
            serviceBoxes.forEach(box => {
                observer.unobserve(box); // Cleanup on unmount
            });
        };
    }, []);

    return (
        <div className='service'>
            <div className='service-header'>
                <h2 data-animation='header'>
                    <span>Services we provide to help lead <span className='coloured-text'>better green</span> life.</span>
                </h2>
            </div>

            <div className='service-con'>
                <div className='service-left'>
                    <p>FEATURED SERVICES</p>

                    <div className='feat-nav'>
                        <div className='line'></div>
                        <div className='line-box'></div>
                    </div>
                </div>

                <div className='service-right'>
                    <div className='service-box'>
                        <h4>01</h4>
                        <p>Eco-Friendly Branding</p>
                        <span>We create brand identities that are rooted in environmental consciousness, using materials and methods that leave a minimal impact on the planet.</span>
                    </div>

                    <div className='service-box'>
                        <h4>02</h4>
                        <p>Sustainable Event Design & Collateral</p>
                        <span>Planning a green event? From eco-friendly banners to sustainable digital invites, we design everything you need to reduce the environmental impact of your event.</span>
                    </div>

                    <div className='service-box'>
                        <h4>03</h4>
                        <p>Sustainable Marketing Collateral</p>
                        <span>Marketing materials are often resource-heavy, but they don’t have to be. We create brochures, posters, flyers, and other marketing collateral with a focus on sustainability.</span>
                    </div>

                    <div className='service-box'>
                        <h4>04</h4>
                        <p>Green Consulting Services</p>
                        <span>Transitioning to sustainable design can be overwhelming for new businesses. We offer a step-by-step guide, helping you integrate green design principles into your operations.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;