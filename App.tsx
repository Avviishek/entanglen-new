
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import MeetOurTutors from './components/MeetOurTutors';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import TrialFormModal from './components/TrialFormModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <Header onBookTrialClick={handleOpenModal} />
      <main>
        <Hero onBookTrialClick={handleOpenModal} />
        <WhyChooseUs />
        <HowItWorks />
        <MeetOurTutors />
        <Testimonials />
        <Pricing />
        <FinalCTA onBookTrialClick={handleOpenModal} />
      </main>
      <Footer />
      <TrialFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
