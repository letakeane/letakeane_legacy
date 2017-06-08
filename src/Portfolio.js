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
        <a  className='portfolio-link'
            href='https://github.com/letakeane/jb-lk-swapi-box/blob/master/README.md'
            target='_blank'
            rel='noopener noreferrer'>
          <div className='swapibox portfolio-pane'>
          <p><strong>SWAPIBox</strong></p>
          <p>A basic app that consumes a Star Wars API and renders the data.</p>
          <p>(All Star Wars images and data are the property of Disney)</p>
          </div>
        </a>
      </article>
      <h2 className='portfolio-header'>Design</h2>
      <article className='portfolio-display'>
        <a  className='portfolio-link'
            href='https://letakeane.github.io/lk-comp-challenge-3/'
            target='_blank'
            rel='noopener noreferrer'>
          <div className='comp3 portfolio-pane'>
          <p><strong>Responsive static comp</strong></p>
          <p>A static comp (pure HTML & CSS) to practice responsive design</p>
          </div>
        </a>
        <a  className='portfolio-link'
            href='http://imgur.com/a/Z8fSe'
            target='_blank'
            rel='noopener noreferrer'>
          <div className='app-design portfolio-pane'>
          <p><strong>App design</strong></p>
          <p>The initial design comps for emotican</p>
          </div>
        </a>
      </article>
      <h2 className='portfolio-header'>Education</h2>
      <article className='portfolio-display'>
        <a  className='portfolio-link'
            href='https://youtu.be/vm794Eu2ykU'
            target='_blank'
            rel='noopener noreferrer'>
          <div className='pizza-foreach portfolio-pane'>
          <p><strong>Explained with Pizza: .forEach()</strong></p>
          <p>The first of a video series I created, which uses pizza as an analogy to explain JavaScript array prototypes</p>
          </div>
        </a>
        <a  className='portfolio-link'
            href='https://youtu.be/FpE99tQnlzc'
            target='_blank'
            rel='noopener noreferrer'>
          <div className='pizza-map portfolio-pane'>
          <p><strong>Explained with Pizza: .map()</strong></p>
          <p>The second of a video series I created, which uses pizza as an analogy to explain JavaScript array prototypes</p>
          </div>
        </a>
      </article>
    </article>
  )
}
