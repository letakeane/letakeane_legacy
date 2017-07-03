import React from 'react';
import { Link } from 'react-router-dom';
import './assets/stylesheets/Portfolio.css';

export const Portfolio = () => {
  window.scrollTo(0, 0);

  return (
    <article className='portfolio'>
      <h2 className='portfolio-header'>Apps</h2>
      <article className='portfolio-display'>
        <Link className='portfolio-link' to='/Portfolio/emotican'>
          <div className='emotican portfolio-pane'>
            <p><strong>emotican</strong></p>
            <p>An app to help children on the autism disorder spectrum learn to nonverbally communicate their emotions</p>
            <p>CLICK TO VIEW PROJECT</p>
          </div>
        </Link>

        <Link className='portfolio-link' to='/Portfolio/jetFuel'>
          <div className='jetfuel portfolio-pane'>
            <p><strong>jetfuel</strong></p>
            <p>A link-shortener service</p>
            <p>CLICK TO VIEW PROJECT</p>
          </div>
        </Link>

        <Link className='portfolio-link' to='/Portfolio/YouAutoCompleteMe'>
          <div className='autocomplete portfolio-pane'>
            <p><strong>You AutoComplete Me</strong></p>
            <p>A weird acrostic valentine generator</p>
            <p>(Actually a prefix trie assignment with a front-end added on for fun)</p>
            <p>CLICK TO VIEW PROJECT</p>
          </div>
        </Link>
      </article>

      <h2 className='portfolio-header'>Design</h2>
      <article className='portfolio-display'>
        <Link className='portfolio-link' to='/Portfolio/ResponsiveDesignComp'>
          <div className='comp3 portfolio-pane'>
            <p><strong>Responsive static comp</strong></p>
            <p>A static comp (pure HTML & CSS) to practice responsive design</p>
            <p>CLICK TO VIEW PROJECT</p>
          </div>
        </Link>
        <Link className='portfolio-link' to='/Portfolio/emoticanAppDesign'>
          <div className='app-design portfolio-pane'>
            <p><strong>App design</strong></p>
            <p>The initial design comps for emotican</p>
            <p>CLICK TO VIEW PROJECT</p>
          </div>
        </Link>
      </article>

      <h2 className='portfolio-header'>Education</h2>
      <article className='portfolio-display'>
        <Link className='portfolio-link' to='/Portfolio/PizzaforEach'>
          <div className='pizza-foreach portfolio-pane'>
            <p><strong>Explained with Pizza: .forEach()</strong></p>
            <p>The first of a video series I created, which uses pizza as an analogy to explain JavaScript array prototypes</p>
            <p>CLICK TO VIEW PROJECT</p>
          </div>
        </Link>
        <Link className='portfolio-link' to='/Portfolio/Pizzamap'>
          <div className='pizza-map portfolio-pane'>
            <p><strong>Explained with Pizza: .map()</strong></p>
            <p>The second of a video series I created, which uses pizza as an analogy to explain JavaScript array prototypes</p>
            <p>CLICK TO VIEW PROJECT</p>
          </div>
        </Link>
      </article>
    </article>
  )
}
