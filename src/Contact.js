import React from 'react';
import './assets/stylesheets/Contact.css';

export const Contact = () => {
  return (
    <article className='contact'>
      <h2 className='form-greeting'>Say hello</h2>
      <div className='contact-form'>
        <form action="https://formspree.io/letakeane@gmail.com"
              method="POST"
              id='contact'>
          <label htmlFor='name'>Your name</label>
          <input  id='name-input'
                  type='text'
                  aria-label='your name'
                  placeholder='What should I call you?'
                  name='name'
                  required />
          <label htmlFor='email'>Your email</label>
          <input  id='email-input'
                  type='email'
                  aria-label='your email'
                  placeholder='email@example.com'
                  name='_replyto'
                  required />
          <label htmlFor='message'>Your message</label>
          <textarea id='message-input'
                    type='text'
                    aria-label='your message'
                    placeholder="What's on your mind?"
                    form='contact'
                    name='message'
                    required />
          <input type='hidden' name='_next' value='//letakeane.com/Contact/success' />
        <button type='submit'
                className='submit-button'>SEND</button>
        </form>
      </div>
    </article>
  )
}
