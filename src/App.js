import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Usedby from './components/Usedby';
import Manage from './components/Manage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
       <div className='gradient_background'>
      <Header />
      <Hero />
      <Usedby />
      <Features />
      <Integrations />
      <Testimonials />
      <Manage />
      <Footer />
    </div>

   
  );
}

export default App;
