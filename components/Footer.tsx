
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
            <h4 className="font-semibold text-gray-200">Connect With Us</h4>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.08 17.29C18.25 18.12 17.15 18.58 16.05 18.58C12.37 18.58 9.42 15.63 9.42 11.95C9.42 8.27 12.37 5.32 16.05 5.32C17.15 5.32 18.25 5.78 19.08 6.61L17.66 8.03C17.11 7.48 16.61 7.22 16.05 7.22C13.48 7.22 11.42 9.28 11.42 11.95C11.42 14.62 13.48 16.68 16.05 16.68C16.61 16.68 17.11 16.42 17.66 15.87L19.08 17.29M4.92 4.92C7.03 2.81 9.91 1.7 12.92 2.1C18.59 2.84 22.84 8.28 22.1 13.96C21.36 19.64 15.92 23.89 10.24 23.15C7.23 22.75 4.7 21.09 3 18.8L3 21H1V15H7L4.92 17.08C6.27 18.78 8.16 19.95 10.31 20.37C14.71 21.1 18.9 17.84 19.63 13.43C20.36 9.02 17.1 4.83 12.69 4.1C10.09 3.72 7.54 4.54 5.61 6.38L4.92 4.92Z" />
                </svg>
              </a>
              {/* Add other social icons as needed */}
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
