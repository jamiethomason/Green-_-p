import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { validateEmail } from '../../utils/helpers';
//import Button from 'react-bootstrap/Button'

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      
      <form className="center" id="contact-form" style={{ width: 'device-width' }}  onSubmit={handleSubmit}>
      <h2 data-testid="h1tag">Contact Us</h2>
        <div>
          <label htmlFor="name"></label>
          <input className='inputbox' type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Name:" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input className='inputbox' type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Email address:" />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea className='inputbox' name="message" rows="1" defaultValue={message} onBlur={handleChange} placeholder="Message:"/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="button" data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;