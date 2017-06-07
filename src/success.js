import React from 'react';
import './assets/stylesheets/Contact.css';

export const success = () => {
  return (
    <article className='success'>
      <h2 className='form-greeting'>Thanks for your note!</h2>
      <h2 className='form-greeting'>I&#8217;ll get back to you soon.</h2>
    </article>
  )
}
