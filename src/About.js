import React from 'react';
import { Link } from 'react-router-dom';
import './assets/stylesheets/About.css';

export const About = () => {
  window.scrollTo(0, 0);

  return (
    <article className='about'>
      <h2 className='hello'>Hello</h2>
      <div className='about-me'>
        <img className='leta' src='/images/headshot.jpg' alt='headshot' />
        <p>I&#8217;m omnivorously curious and take unabashed, dorky joy in learning new things. In my previous professional life, I worked at the Denver Museum of Nature & Science, where I encouraged critical thinking and creativity through informal science education.</p>
        <p>I graduate from the Turing School of Software & Design&#8217;s Front-End Engineering program in August 2017.</p>
        <p>I have a passion for creating websites and applications that are intuitive, accessible, and which make people&#8217;s lives better.</p>
        <Link className='contact-me-link' to='/Contact'>contact me</Link>
      </div>
    </article>
  )
}
