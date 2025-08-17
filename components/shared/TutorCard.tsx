
import React from 'react';
import { Tutor } from '../../types';
import Button from './Button';

interface TutorCardProps {
  tutor: Tutor;
  onBookTrial?: () => void;
}

// ...existing code...
const TutorCard: React.FC<TutorCardProps> = ({ tutor, onBookTrial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300" style={{ minHeight: '500px' }}>
      <img
        className="h-96 w-full object-contain bg-gray-100"
        src={tutor.image.startsWith('/') ? tutor.image : `/${tutor.image}`}
        alt={tutor.name}
        onError={e => (e.currentTarget.src = 'https://via.placeholder.com/200x200?text=No+Image')}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900">{tutor.name}</h3>
        <p className="text-sm text-blue-600 font-semibold mt-1">{tutor.experience} experience</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {tutor.subjects.map(subject => (
            <span key={subject} className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">{subject}</span>
          ))}
        </div>
        <p className="mt-3 text-gray-600 text-sm italic flex-grow">"{tutor.testimonial}"</p>
        <div className="mt-4">
          <Button variant="secondary" size="small" className="w-full" onClick={onBookTrial}>Book Trial</Button>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
