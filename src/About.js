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
        <p>I'm omnivorously curious and take unabashed, dorky joy in learning new things. My pronouns are she/her. I'm an Associate Instructor at the <a href="https://turing.io" target="_blank">Turing School of Software & Design</a>, in the Front-End Engineering program, where I teach amazing people JavaScript, React, Redux, and the sundry other nuts and bolts of the front-end world.</p>
        <p>In my previous professional life, I worked at the Denver Museum of Nature & Science, where I encouraged critical thinking and creativity through informal science education. Before that, I wrote SEO-rich web copy, briefly putting my creative writing degree to professional use.</p>
        <p>I have a passion for creating websites and applications that are intuitive, accessible, and which make people's lives better.</p>
        <Link className='contact-me-link' to='/Contact'>contact me</Link>
      </div>
    </article>
  )
}
