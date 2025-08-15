
import React from 'react';
import Button from './shared/Button';

const FinalCTA: React.FC<{ onBookTrialClick: () => void }> = ({ onBookTrialClick }) => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Boost Your Grades?</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Find the perfect tutor and see the difference a personalized education can make. Your first trial class is on us!
          </p>
          <div className="mt-8">
            <Button variant="special" size="large" onClick={onBookTrialClick}>Book Your Free Trial Now</Button>
          </div>
          <div className="mt-6 text-blue-200">
            <p>Or want to talk to us? 
              <a href="#" className="font-semibold underline hover:text-white ml-2">Chat With Us</a> or 
              <a href="#" className="font-semibold underline hover:text-white ml-1">Schedule a Call</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
