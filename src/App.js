import React from 'react';
import './App.css';

import { Fragment } from 'react'
import Landing from './components/Landing'
import Intro from './components/Intro'
import Experiences from './components/Experiences'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'

function App() {
  return (
    <Fragment>
      <Landing/>
      <Intro/>
      <Experiences/>
      <Education/>
      <Hobbies/>
      <Contact/>
    </Fragment>
  );
}

export default App;
