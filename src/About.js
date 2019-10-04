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
        <p>I'm omnivorously curious and take unabashed, dorky joy in learning new things. My pronouns are she/her. I'm an Associate Instructor at the <a href='https://turing.io' target='_blank' rel="noopener noreferrer">Turing School of Software & Design</a>, in the Front-End Engineering program, where I teach amazing people the nuts and bolts of JavaScript and React.</p>
        <p>In my previous professional life, I worked at the Denver Museum of Nature & Science, where I encouraged critical thinking and creativity through informal science education. Before that, I wrote SEO-rich web copy, briefly putting my creative writing degree to professional use.</p>
        <p><span role='img' aria-label='Loves'>😍</span>: science, empathy, code that’s readable instead of just clever, and high fives.</p>
        <p>I tweet about coding, science, writing, social justice, and embarrassingly personal things at <a href='https://twitter.com/letacodes' target='_blank' rel="noopener noreferrer">@LetaCodes</a>.</p>
        <Link className='contact-me-link' to='/Contact'>contact me</Link>
      </div>
    </article>
  )
}
