
import React, { useState, useEffect } from 'react';
import Button from './shared/Button';
import { TUTORS } from '../constants';

interface TrialFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSubject?: string;
}

const subjects = [...new Set(TUTORS.flatMap(t => t.subjects))];
const defaultSubject = subjects.length > 0 ? subjects[0] : '';


const TrialFormModal: React.FC<TrialFormModalProps> = ({ isOpen, onClose, selectedSubject }) => {
  const [completed, setCompleted] = React.useState(false);
  const [formError, setFormError] = React.useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    const handleFormforgeMessage = (event: MessageEvent) => {
      if (event.origin === 'https://formforge.solutions' && event.data === 'formforge:submitted') {
        setCompleted(true);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
      window.addEventListener('message', handleFormforgeMessage);
    } else {
      document.body.style.overflow = 'unset';
      setCompleted(false);
      setFormError(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('message', handleFormforgeMessage);
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
  {/* Heading and description removed as requested */}
  {completed ? (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-5">
              <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 id="modal-title" className="text-2xl font-bold text-gray-900">Thank You!</h3>
            <p className="text-gray-600 mt-2">We've received your request and will get back to you via email shortly.</p>
            <div className="mt-8">
              <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
            </div>
          </div>
        ) : (
          <div className="w-full h-[600px]">
            {!formError ? (
              <iframe
                src="https://formforge.solutions/form/60236590-621e-486c-9ec3-683e0e312b8c"
                width="100%"
                height="600"
                frameBorder="0"
                title="Formforge Trial Request"
                style={{ borderRadius: '16px', width: '100%', height: '100%' }}
                onError={() => setFormError(true)}
              ></iframe>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-red-600 font-semibold">Failed to load the form. Please check your internet connection or try again later.</p>
                <Button variant="primary" size="medium" onClick={onClose} className="mt-4">Close</Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrialFormModal;
