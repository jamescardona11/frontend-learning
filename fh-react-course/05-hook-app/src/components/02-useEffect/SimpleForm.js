import React, { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('first time cambio');
  }, [])

  useEffect(() => {
    console.log('form cambio');
  }, [formState])



  useEffect(() => {
    console.log('Emial cambio');
  }, [email])


  const onInputChange = ({ target }) => {
    console.log(target);

    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  }

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />>

      <div className='form-group'>
        <input
          type="text"
          name="name"
          className='form-control'
          placeholder='Your name'
          autoComplete='off'
          value={name}
          onChange={onInputChange}>
        </input>
      </div>

      <div className='form-group'>
        <input
          type="text"
          name="email"
          className='form-control'
          placeholder='email'
          autoComplete='off'
          value={email}
          onChange={onInputChange}>
        </input>
      </div>

      {(name === 'james1') && <Message />}

    </>
  )
}
