import React from 'react';
import { NavLink } from 'react-router-dom';
import './assets/stylesheets/NavBar.css';

export const NavBar = () => {
  return (
    <article className='navbar'>
      <NavLink to='/Portfolio' className='aside-nav' activeClassName='selected'>Portfolio</NavLink>
      <NavLink to='/Resume' className='aside-nav' activeClassName='selected'>Resume</NavLink>
      <NavLink to='/About' className='aside-nav' activeClassName='selected'>About</NavLink>
      <a href='https://medium.com/@letakeane' className='aside-nav' target='_blank' rel='noopener noreferrer'>Blog</a>
      <NavLink to='/Talks' className='aside-nav' activeClassName='selected'>Talks</NavLink>
      <NavLink to='/Contact' className='aside-nav' activeClassName='selected'>Contact</NavLink>
    </article>
  )
}
