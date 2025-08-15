
import React from 'react';

const Step: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">
      {number}
    </div>
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{children}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Started in 4 Easy Steps</h2>
          <p className="mt-4 text-lg text-gray-600">Your journey to academic success is just a few clicks away.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
             <Step number={1} title="Browse Tutors">
              Explore profiles, subjects, and reviews to find your perfect tutor.
            </Step>
            <Step number={2} title="Select Time Slot">
              Choose a convenient time from the tutor's availability calendar.
            </Step>
            <Step number={3} title="Book Trial / Session">
              Book a free trial to ensure it's a great fit, then schedule regular sessions.
            </Step>
            <Step number={4} title="Learn Live Online">
              Connect with your tutor via Zoom/Meet for interactive, 1-on-1 learning.
            </Step>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
