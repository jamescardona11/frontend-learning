import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

  const [ counter, setCounter ] = useState(value);

  const _onClickPlus = ()=>{
    setCounter(counter + 1)
    // setCounter((c)=>c + 1) // other option
  }

  const _onClickMinus = ()=>{
    setCounter(counter + -1)
    // setCounter((c)=>c + 1) // other option
  }

  const _onClickReset = ()=>{
    setCounter(value)
    // setCounter((c)=>c + 1) // other option
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ _onClickPlus }>+1</button>
      <button onClick={ _onClickMinus }>-1</button>
      <button onClick={ _onClickReset }>reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

export default CounterApp;


