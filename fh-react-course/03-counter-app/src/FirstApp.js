import React from 'react';
import PropTypes from 'prop-types';



const FirstApp = ( {sayHello, subtitle} ) => {

  return (
    < >
      <h1>{sayHello}</h1>
      <p>{subtitle}</p>
    </>
    
  );
}

FirstApp.propTypes = {
  sayHello: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = { 
  sayHello: 'Hey!!',
  subtitle: 'Subtitle: First app'
}


export default FirstApp;