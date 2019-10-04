import React from 'react';
import './assets/stylesheets/Resume.css';
import './assets/stylesheets/Talks.css';

export const Talks = () => {
  window.scrollTo(0, 0);

  return (
    <article className='resume'>
      <h2 className='resume-header'>Selected Talks</h2>
      <section className='talks-display'>
        <h3 className='talks-title'>Cream City Code @ Fall Experiment 2019</h3>
        <p className='talk-date'>October 5, 2019</p>
        <a href='https://fallexperiment.com/events/how-to-escape-the-cult-of-expertise-growth-mindset-and-how-the-words-i-dont-know-can-save-you' target='_blank' rel="noopener noreferrer">How to Escape the Cult of Expertise</a>
        <p>Tech is a field full of experts. How do we know when our own love of knowhow is holding us back? If we can't admit that we don't know something, are we really able to keep learning? How does this idea of Expertise contribute to the lack of diversity and inclusion on our teams?</p>
        <p>This talk will examine grit, growth mindset, and the ways our love of knowing everything can actually keep us from cultivating an environment where we can do our best learning or take the kinds of risks that lead to innovation. This also becomes especially important as more and more teams are tasked with training junior developers - how do we best ramp up enthusiastic rookies? In this talk, we'll learn concrete strategies to check our pride at the door, lean into the discomfort of growth mindset, and cultivate a team that isn't afraid to say "I don't know, but let's find out!"</p>
        <a href='https://slides.com/letakeane/cream-city-code-2019' target='_blank' rel="noopener noreferrer">Slides</a>
      </section>
      <section className='talks-display'>
        <h3 className='talks-title'>Develop Denver 2019</h3>
        <p className='talk-date'>August 16, 2019</p>
        <a href='https://web.archive.org/save/https://developdenver.org/talks/269' target='_blank' rel="noopener noreferrer">I Love You But I Don't Need You: using color in accessible applications</a>
        <p>From indicating errors to emphasizing a call to action, color can play a critical role in how we communicate with users. But what role does it play in accessibility?</p>
        <p>In this talk, we'll examine the ways color can improve or detract from an app's usability, and learn to make our apps intuitive, delightful, and informative without relying on color to do all of the heavy lifting.</p>
        <p>Useful for both designers and developers, this talk will look into a variety of tools we can leverage to create semantic, pleasant applications that serve everyone - not just users with perfect color vision.</p>
        <a href='https://slides.com/letakeane/color-in-accessibility' target='_blank' rel="noopener noreferrer">Slides</a>
      </section>
      <section className='talks-display'>
        <h3 className='talks-title'>React Conf 2018</h3>
        <p className='talk-date'>October 25, 2018</p>
        <a href='https://medium.com/curated-by-versett/talks-worth-watching-react-conf-2018-bfbdd40922aa' target='_blank' rel="noopener noreferrer">Better Living Through Git Hooks</a>
        <p>Clean up your workflow with Git Hooks!</p>
        <p>A lightning talk given at the Las Vegas React Conf 2018</p>
        <a href='https://www.youtube.com/watch?v=m-uy_2xmIP4' target='_blank' rel="noopener noreferrer">Video</a>
      </section>
    </article>
  )
}
