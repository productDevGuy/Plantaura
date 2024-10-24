import React from 'react'
import './Service.css';

function Service() {
  return (
    <div className='service'>
        <h2>Services we provide to help lead <strong>better green</strong> life.</h2>

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
                    <span>Marketing materials are often resource-heavy, but they don’t have to be. We create brochures, posters, flyers, and other marketing collateral with a focus on sustainability</span>
                </div>

                <div className='service-box'>
                    <h4>04</h4>
                    <p>Green Consulting Services</p>
                    <span>Transitioning to sustainable design can be overwhelming for new businesses. We offer a step-by-step guide, helping you integrate green design principles into your operations.</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Service