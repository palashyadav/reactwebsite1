import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Muscle from './Muscle';
import Fatloss from './Fatloss';
import Feverdiet from './Feverdiet';
import Maintain from './Maintain';
import Healthchecker from './Healthchecker';
import Detox from './Detox';
import Infant from './Infant';
import Caloriemeter from './Caloriemeter';
import Proteinmeter from './Proteinmeter';
import Pregnent from './Pregnent';
import Avoid from './Avoid'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Muscle' element={<Muscle/>}/>
        <Route path='/Fatloss' element={<Fatloss/>}/>
        <Route path='/Feverdiet' element={<Feverdiet/>}/>
        <Route path='/Maintain' element={<Maintain/>}/>
        <Route path='/Detox' element={<Detox/>}/>
        <Route path='/Infant' element={<Infant/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Healthchecker' element={<Healthchecker/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/caloriemeter' element={<Caloriemeter/>}/>
        <Route path='/proteinmeter' element={<Proteinmeter/>}/>
        <Route path='/pregnent' element={<Pregnent/>}/>
        <Route path='/avoid' element={<Avoid/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App


