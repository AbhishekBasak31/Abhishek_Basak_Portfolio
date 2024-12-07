import React from 'react'
import Header from './Components/Header/Header.jsx'
import Heroes from './Components/Heroes/Heroes.jsx'
import Technology from './Components/TechandProjects/Technology.jsx'
import Contact from './Components/Contact/Contact.jsx'


function App() {
  

  return (
      <div className='box-border overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-lightYellow
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-lightYellow
  dark:[&::-webkit-scrollbar-track]:bg-lightYellow
  dark:[&::-webkit-scrollbar-thumb]:bg-lightYellow'>
        <Header/>
        <Heroes/>
        <Technology/>
        <Contact/>
      </div>
  )
}

export default App