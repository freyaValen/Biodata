import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Photo, Name, Contact, Profile, Education,Language, Achievement, Skills, Experience} from './components'

function App() {
  return (
    <div className='App'>
      <Name />
      <Photo />
      <div className='sidebar'>
        <Contact />
        <hr />  
        <Education />
        <hr />
        <Language />
        <hr />
      </div>
      <div className='content'>
        <Profile />
        <hr />
        <Achievement />
        <hr />
        <Skills />
        <hr />
        <Experience />
        <hr/>
      </div>
    </div>
  )
}

export default App
