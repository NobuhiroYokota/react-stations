// DO NOT DELETE

import { useEffect, useState } from 'react';
import './App.css'
import { logRoles } from '@testing-library/react';
import { data } from 'browserslist';
import Description from './Description';
import Header from './Header';
import DogImage from './DogImage';
import DogListContainer from './DogListContainer';
import { afterAll } from 'vitest';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  return (

    <section>
      <Header />
      <Description />
      <DogListContainer />
    </section>

//test


  );
}
