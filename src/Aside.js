import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import './assets/stylesheets/Aside.css';

export const Aside = () => {
  return (
    <article className='aside'>
      <Link to='/' className='hero'>
        <img className='logo' src='https://i.giphy.com/media/xUOwFSWHOu2qYMJTmU/giphy.gif' alt='blooming flower' />
        <h1 className='title'>Leta Keane</h1>
        <h6 className='description'>Front-end developer</h6>
      </Link>
      <NavBar />
      <article className='logo-bar'>
        <Link to='https://github.com/letakeane' className='social github-logo' target='_blank' rel='noopener noreferrer' role='link'></Link>
        <Link to='https://www.linkedin.com/in/letakeane/' className='social linkedin-logo' target='_blank' rel='noopener noreferrer' role='link'></Link>
        <Link to='https://twitter.com/LetaCodes' className='social twitter-logo' target='_blank' rel='noopener noreferrer' role='link'></Link>
        <Link to='https://www.youtube.com/channel/UC55K7VDs6iHAC5Wi2w4cLXg' className='social youtube-logo' target='_blank' rel='noopener noreferrer' role='link'></Link>
      </article>
      <p className='motto'>crafted with intention</p>
    </article>
  )
}
