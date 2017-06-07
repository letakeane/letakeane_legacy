import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import './assets/stylesheets/Aside.css';

export const Aside = () => {
  return (
    <article className='aside'>
      <Link to='/' className='hero'>
        <img className='logo' src='/images/logo-sq.png' alt='Leta Keane logo of a minimalistic representation of a mineral crystal' />
        <h1 className='title'>Leta Keane</h1>
        <h6 className='description'>Front-end developer</h6>
      </Link>
      <NavBar />
      <p className='motto'>crafted with intention</p>
    </article>
  )
}
