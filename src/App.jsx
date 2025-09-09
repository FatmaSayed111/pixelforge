import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
import Work from './components/Work';
import About from './components/About';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <Process />
      <Work />
      <About />
      <Insights />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;