import './App.css';
import Nav from './components/Nav';
import Hero1 from './components/Hero1';
import Services from './components/Services';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Work from './components/Work';
import Process from './components/Process';

function App() {
  return (
    <>
      <Nav />
      <Hero1 />
      <Services />
      <Work></Work>
      <About></About>
      <Process></Process>
      <Contact />
    </>
  );
}

export default App;