
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import MeetOurTutors from './components/MeetOurTutors';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Founders from './components/Founders';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import TrialFormModal from './components/TrialFormModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const handleOpenModal = (subject?: string) => {
    setIsModalOpen(true);
    if (subject) setSelectedSubject(subject);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSubject(null);
  };

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <Header onBookTrialClick={() => handleOpenModal()} />
      <main>
        <Hero onBookTrialClick={() => handleOpenModal()} />
        <WhyChooseUs />
        <HowItWorks />
        <MeetOurTutors />
        <Testimonials />
  <Pricing onChooseSubject={handleOpenModal} />
  <Founders />
        <FinalCTA onBookTrialClick={() => handleOpenModal()} />
      </main>
      <Footer />
      <TrialFormModal isOpen={isModalOpen} onClose={handleCloseModal} selectedSubject={selectedSubject} />
    </div>
  );
}

export default App;
