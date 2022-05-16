import React from 'react';
import {render, screen} from '@testing-library/react';

import FirstApp from '../FirstApp';
import setupTest from '../setupTest';

describe('Test react component', () => { 

  test('testing FirstApp <Hola soy Goku!>', () => { 

    const sayHello = 'Hola soy Goku!';
    
    render(<FirstApp sayHello= {sayHello}/>)

    
    expect(screen.getByText(sayHello)).toBeInTheDocument();
   })

 })