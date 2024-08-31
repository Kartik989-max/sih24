import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Hero2 from './components/Hero2/Hero2';
import Hero3 from './components/Hero3/Hero3';
function App(){
 
  return (
    <div>
     <Nav/>
     {/* <h1>Helo</h1> */}
      
     <Hero/>
     <Hero2/>
     <Hero3/>
    </div>  
  );
}

export default App;
