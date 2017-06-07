import React from 'react';
import { NavLink } from 'react-router-dom';
import './assets/stylesheets/NavBar.css';

export const NavBar = () => {
  return (
    <article className='navbar'>
      <NavLink to='/Portfolio' className='aside-nav' activeClassName='selected'>Portfolio</NavLink>
      <NavLink to='/Resume' className='aside-nav' activeClassName='selected'>Resume</NavLink>
      <NavLink to='/About' className='aside-nav' activeClassName='selected'>About</NavLink>
      <NavLink to='https://letakeane.tumblr.com/' className='aside-nav' activeClassName='selected'>Blog</NavLink>
      <NavLink to='/Contact' className='aside-nav' activeClassName='selected'>Contact</NavLink>
    </article>
  )
}
