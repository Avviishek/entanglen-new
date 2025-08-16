
import React, { useState, useEffect } from 'react';
import Button from './shared/Button';
import { TUTORS } from '../constants';

interface TrialFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const subjects = [...new Set(TUTORS.flatMap(t => t.subjects))];
const defaultSubject = subjects.length > 0 ? subjects[0] : '';


const TrialFormModal: React.FC<TrialFormModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full relative transform transition-all duration-300 ease-in-out ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors" aria-label="Close modal">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Book Your Free Trial</h2>
        <p className="text-gray-500 mb-6">Please fill out the form below. Your details will be sent directly to Formforge.</p>
        <div className="w-full h-[600px]">
          <iframe
            src="https://formforge.solutions/form/60236590-621e-486c-9ec3-683e0e312b8c"
            width="100%"
            height="600"
            frameBorder="0"
            title="Formforge Trial Request"
            style={{ borderRadius: '16px', width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrialFormModal;
