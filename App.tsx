
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-green-50 text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Gallery />
        <Testimonials />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
