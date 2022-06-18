import React, { useState } from 'react';
import { useForm } from './useForm';


export const FormWithCustomHook = () => {

  const { formState, onInputChange } = useForm(

    {
      name: '',
      email: '',
      password: '',
    }
  );

  const { name, email, password } = formState;

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

      <div className='form-group'>
        <input
          type="password"
          name="password"
          className='form-control'
          placeholder='password'
          autoComplete='off'
          value={password}
          onChange={onInputChange}>
        </input>
      </div>



    </>
  )
}
