import React, { useState } from 'react';
import { useFetch } from './useFetch';

//https://breakingbadapi.com/api/quotes/1
export const BadQuotesExample = () => {
  const { state: index, increment } = useCounter();
  const { data, hasError, isLoading } = useFetch(
    `https://breakingbadapi.com/api/quotes/${index}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BadQuotesExample</h1>
      <hr />
      {isLoading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <p className='mb-1'>{quote}</p>
          <footer className='blockquote-footer'> {author}</footer>
        </blockquote>
      )}
      <button className='btn btn-primar' onClick={() => increment()}>
        Next quote
      </button>
    </>
  );
};

const useCounter = (initialState = 1) => {
  const [state, setState] = useState(initialState);

  const increment = (factor = 1) => {
    setState(state + factor);
  };

  return {
    state,
    increment,
  };
};
