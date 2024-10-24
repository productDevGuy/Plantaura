import React, { useEffect, useRef } from 'react';
import './Project.css';
import { gsap } from 'gsap';

function Project() {
  const imageRefs = useRef([]); // Store refs for images in an array
  const observerRef = useRef(null); // Store the IntersectionObserver instance

  useEffect(() => {
    // Create an IntersectionObserver instance
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const image = entry.target; // Get the image element that is intersecting
          
          // GSAP animation for the image when it enters the viewport
          gsap.fromTo(
            image,
            { y: 100, opacity: 0 }, // Start from below and fully transparent
            {
              y: 0, // Move to original position
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out',
              delay: index * 0.2, // Stagger the animations
              onComplete: () => {
                observerRef.current.unobserve(image); // Stop observing after animation
              },
            }
          );
        }
      });
    }, { threshold: 0.1 }); // Set threshold for the observer

    // Observe each image in the imageRefs array
    imageRefs.current.forEach((image) => {
      if (image) {
        observerRef.current.observe(image); // Start observing the image
      }
    });

    // Cleanup: disconnect the observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // Empty dependency array ensures this effect runs once

  return (
    <div className='project'>
      <div className='project-header'>
        <h2 data-animation='header'>
          <span>Explore our <span className='coloured-text'>green projects</span> today.</span>
        </h2>
      </div>

      <div className='project-con'>
        {projectsData.map((project, index) => (
          <div className='project-box' key={project.title}>
            <p>{project.title}</p>
            <span>{project.subtitle}</span>
            <img
              ref={(el) => (imageRefs.current[index] = el)} // Store image element ref
              src={project.imageUrl}
              alt={project.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const projectsData = [
  {
    title: 'EcoLiving Initiative',
    subtitle: 'Sustainable, Healthy, Future',
    imageUrl: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1729748828/38268_s5sfgw.jpg',
  },
  {
    title: 'FutureRoots Foundation',
    subtitle: 'Growth, Environment, Responsibility',
    imageUrl: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1729748829/11969_tgymzq.jpg',
  },
  {
    title: 'GreenPath Communities',
    subtitle: 'Eco-friendly, Empowered, Collaborative',
    imageUrl: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1729748832/2150196693_kw0cag.jpg',
  },
  {
    title: 'RenewGreen Projects',
    subtitle: 'Renewable, Sustainable, Change',
    imageUrl: 'https://res.cloudinary.com/dxnukbo0u/image/upload/v1729748831/2150196696_dkz4jg.jpg',
  }
];

export default Project;
