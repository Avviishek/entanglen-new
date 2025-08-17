
import React from 'react';
import Button from './shared/Button';

const Header: React.FC<{ onBookTrialClick: () => void }> = ({ onBookTrialClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-56-auto mr-2" style={{ maxHeight: '200px' }} />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tutors" className="text-gray-600 hover:text-blue-600 transition-colors">Tutors</a>
            <a href="#subjects" className="text-gray-600 hover:text-blue-600 transition-colors">
  Subject
</a>

            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
          </nav>
          <div className="flex items-center">
            <Button variant="primary" size="medium" onClick={onBookTrialClick}>Book a Free Trial</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
