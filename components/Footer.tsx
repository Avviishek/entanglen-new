
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white">Entangle</h3>
            <p className="mt-2 text-gray-400">World-Class Indian Tutors. Affordable. Reliable. Online.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#tutors" className="text-gray-400 hover:text-white">Browse Tutors</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Subject</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200">Contact Us</h4>
            <div className="mt-4">
              <a href="mailto:info@entanglestudy.com" className="text-gray-400 hover:text-white">info@entanglestudy.com</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Entangle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
