import React from 'react';
import { Link } from 'react-router-dom';
import './assets/stylesheets/Resume.css';

export const Resume = () => {
  return (
    <article className='resume'>
      <h2 className='resume-header'>Projects</h2>
      <div className='resume-display'>
        <Link className='resume-link' to='/Portfolio'>Click to See Projects</Link>
      </div>
      <h2 className='resume-header'>Skills</h2>
      <div className='resume-display'>
        <p>HTML5 + CSS 3</p>
        <p>JavaScript (ES6)</p>
        <p>React/Redux</p>
        <p>jQuery</p>
        <p>UX/UI Design</p>
        <p>Testing (Mocha, Chai, Enzyme, Jest)</p>
        <p>WAI-ARIA</p>
        <p>Sketch</p>
        <p>Node</p>
        <p>Express</p>
      </div>
      <h2 className='resume-header'>Experience</h2>
      <div className='resume-display'>
        <div className='experience-group'>
          <h3 className='experience'>Lab Programs Assistant</h3>
          <h3 className='company'>Denver Museum of Nature &amp; Science</h3>
          <p>I fostered critical thinking and curiosity in students and families through informal science education in a biology lab. I created protocols and streamlined processes in the lab, as well as training and managing a corps of 150+ volunteers.</p>
        </div>
        <div className='experience-group'>
          <h3 className='experience'>SEO Copywriter</h3>
          <h3 className='company'>GreenTent Web Design &amp; Marketing</h3>
          <p>I wrote persuasive, information-rich copy to capture user interactions and boost keyword rankings. I also wrote user personas, conducted client interviews, and worked closely with the design team on information architecture and UXD.</p>
        </div>
      </div>
      <h2 className='resume-header'>Education</h2>
      <div className='resume-display'>
        <div className='experience-group'>
          <h3 className='experience'>Turing School of Software &amp; Design</h3>
          <p>Front-End Engineering Program</p>
        </div>
        <div className='experience-group'>
          <h3 className='experience'>Coe College</h3>
          <p>Bachelor of Arts in Creative Writing</p>
        </div>
      </div>
      <h2 className='resume-header'>Contact Me</h2>
      <div className='resume-display'>
        <Link className='resume-link' to='/Contact'>Say hello</Link>
      </div>
    </article>
  )
}
