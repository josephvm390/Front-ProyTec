import React from 'react'
import Navbar from './Navbar'
import InfoSmarth from './InfoSmarth'
import Experience from './Experience'
import GroupClasses from './GroupClasses'
import Plans from './Plans'
import './MainPage.css'

function MainPage() {
  return (
    <div>
        <Navbar></Navbar>
        <InfoSmarth></InfoSmarth>
        <Experience></Experience>
        <GroupClasses></GroupClasses>
        <Plans></Plans>
        
    </div>
    
  )
}

export default MainPage