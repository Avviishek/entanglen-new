import React from 'react';
import Button from './shared/Button';

const Hero: React.FC<{ onBookTrialClick: () => void }> = ({ onBookTrialClick }) => {
  const scrollToTutors = () => {
    const section = document.getElementById("tutors");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              World-Class Indian Tutors.
              <span className="block text-blue-600">Affordable. Reliable. Online.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600">
              Live 1-on-1 online tutoring for students in Europe, America & beyond — starting at just <span className="font-bold text-green-600">$90/Monthly</span>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button variant="primary" size="large" onClick={onBookTrialClick}>
                Book a Free Trial
              </Button>
              <Button variant="secondary" size="large" onClick={scrollToTutors}>
                Browse Tutors
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-green-300 rounded-2xl shadow-2xl transform rotate-3"></div>
             <img 
                src="/hero1.jpg" 
                alt="Virtual Classroom" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
