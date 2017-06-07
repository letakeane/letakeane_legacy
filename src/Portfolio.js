import React from 'react';
import './assets/stylesheets/Portfolio.css';

export const Portfolio = () => {
  return (
    <article className='portfolio'>
      <h2 className='portfolio-header'>Apps</h2>
      <article className='portfolio-display'>
        <a  className='portfolio-link'
            href='https://github.com/letakeane/emotican-express/blob/master/README.md'
            target='_blank'
            rel='noopener noreferrer'>
          <div className='emotican portfolio-pane'>
          <p><strong>emotican</strong></p>
          <p>An app to help children on the autism disorder spectrum learn to nonverbally communicate their emotions</p>
          </div>
        </a>
        <a  className='portfolio-link'
            href='https://github.com/letakeane/CompleteMe/blob/master/README.md'
            target='_blank'
            rel='noopener noreferrer'>
          <div className='autocomplete portfolio-pane'>
          <p><strong>You AutoComplete Me</strong></p>
          <p>A weird acrostic valentine generator</p>
          <p>(Actually a prefix trie assignment with a front-end added on for fun)</p>
          </div>
        </a>
      </article>
      <h2 className='portfolio-header'>Design</h2>
      <article className='portfolio-display'></article>
      <h2 className='portfolio-header'>Education</h2>
      <article className='portfolio-display'></article>
    </article>
  )
}
