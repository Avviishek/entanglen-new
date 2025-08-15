
import React, { useState, useMemo } from 'react';
import { TUTORS } from '../constants';
import { Tutor } from '../types';
import Button from './shared/Button';
import TutorCard from './shared/TutorCard';
import TrialFormModal from './TrialFormModal';

const MeetOurTutors: React.FC = () => {
  const [subjectFilter, setSubjectFilter] = useState<string>('All');
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const subjects = useMemo(() => ['All', ...new Set(TUTORS.flatMap(t => t.subjects))], []);
  const availabilities = useMemo(() => ['All', ...new Set(TUTORS.map(t => t.availability))], []);

  const filteredTutors = useMemo(() => {
    return TUTORS.filter(tutor => {
      const subjectMatch = subjectFilter === 'All' || tutor.subjects.includes(subjectFilter);
      const availabilityMatch = availabilityFilter === 'All' || tutor.availability === availabilityFilter;
      return subjectMatch && availabilityMatch;
    });
  }, [subjectFilter, availabilityFilter]);

  return (
    <>
      <section id="tutors" className="py-16 sm:py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Expert Tutors</h2>
            <p className="mt-4 text-lg text-gray-600">Handpicked educators from India, ready to inspire.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex-1">
              <label htmlFor="subject-filter" className="block text-sm font-medium text-gray-700">Filter by Subject</label>
              <select
                id="subject-filter"
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                {subjects.map(subject => <option key={subject} value={subject}>{subject}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="availability-filter" className="block text-sm font-medium text-gray-700">Filter by Availability</label>
              <select
                id="availability-filter"
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                {availabilities.map(avail => <option key={avail} value={avail}>{avail}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTutors.map(tutor => (
              <TutorCard key={tutor.id} tutor={tutor} onBookTrial={handleOpenModal} />
            ))}
          </div>
          {filteredTutors.length === 0 && (
              <div className="text-center col-span-full py-12">
                  <p className="text-gray-500 text-lg">No tutors match the current filters.</p>
              </div>
          )}
        </div>
      </section>
      <TrialFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default MeetOurTutors;
