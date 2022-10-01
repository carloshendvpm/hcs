import React from 'react'
import Welcome from './components/Welcome'
import './App.css'
import { RocketCard } from './components/RocketCard'

export default function App() {
  return (
    <div className='App'>
      <Welcome/>
      <div className='Main'>
        <RocketCard/>
      </div>
    </div>
  )
}
