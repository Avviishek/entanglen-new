
import { Tutor, Testimonial, PricingPlan } from './types';

export const TUTORS: Tutor[] = [
  {
    id: 1,
    name: 'Aarav Sharma',
    photoUrl: 'https://picsum.photos/id/1005/200/200',
    subjects: ['Mathematics', 'Physics'],
    experience: '8+ years',
    languages: ['English', 'Hindi'],
    availability: 'Full-time',
    testimonial: 'Aarav makes complex physics concepts easy to understand. Highly recommended!'
  },
  {
    id: 2,
    name: 'Priya Patel',
    photoUrl: 'https://picsum.photos/id/1011/200/200',
    subjects: ['Chemistry', 'Biology'],
    experience: '6+ years',
    languages: ['English', 'Gujarati'],
    availability: 'Part-time',
    testimonial: 'Priya is an amazing chemistry tutor. My grades have improved significantly.'
  },
  {
    id: 3,
    name: 'Rohan Gupta',
    photoUrl: 'https://picsum.photos/id/1012/200/200',
    subjects: ['Computer Science', 'Mathematics'],
    experience: '10+ years',
    languages: ['English', 'Hindi'],
    availability: 'Full-time',
    testimonial: 'Rohan is a patient and knowledgeable teacher, especially for coding.'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    photoUrl: 'https://picsum.photos/id/1027/200/200',
    subjects: ['English Literature', 'History'],
    experience: '7+ years',
    languages: ['English', 'Telugu'],
    availability: 'Part-time',
    testimonial: 'Sneha has a wonderful way of bringing history to life.'
  },
    {
    id: 4,
    name: 'Sneha Reddy',
    photoUrl: 'https://picsum.photos/id/1027/200/200',
    subjects: ['English Literature', 'History'],
    experience: '7+ years',
    languages: ['English', 'Telugu'],
    availability: 'Part-time',
    testimonial: 'Sneha has a wonderful way of bringing history to life.'
  },
    {
    id: 4,
    name: 'Sneha Reddy',
    photoUrl: 'https://picsum.photos/id/1027/200/200',
    subjects: ['English Literature', 'History'],
    experience: '7+ years',
    languages: ['English', 'Telugu'],
    availability: 'Part-time',
    testimonial: 'Sneha has a wonderful way of bringing history to life.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "My son's Math scores improved within a month. The tutor was patient, knowledgeable, and made learning fun.",
    author: 'Anna',
    location: 'Germany'
  },
  {
    id: 2,
    quote: "Affordable and better than local tutors. The flexibility in scheduling is a huge plus for our busy family.",
    author: 'Luis',
    location: 'Spain'
  },
  {
    id: 3,
    quote: "Entangle provided a fantastic chemistry tutor who helped my daughter gain confidence and excel in her exams.",
    author: 'Chloe',
    location: 'USA'
  }
];

// constants.ts
export const PRICING_PLANS = [
  {
    plan: 'Mathematics / Coding',
    price: 105,
    costPerHour: 105,
    features: [
      '1 hour daily live class',
      'Interactive coding challenges (if Coding)',
      'Practice worksheets & assignments',
      'Doubt-clearing sessions every week'
    ],
    highlight: true
  },
  {
    plan: 'Physics / Chemistry / Biology',
    price: 100,
    costPerHour: 100,
    features: [
      '1 hour daily live class',
      'Concept-based learning with experiments',
      'Detailed notes & practice problems',
      'Weekly tests & feedback'
    ],
    highlight: false
  },
  {
    plan: 'English',
    price: 90,
    costPerHour: 90,
    features: [
      '1 hour daily live class',
      'Grammar, vocabulary, and spoken English',
      'Reading & writing skill improvement',
      'Weekly speaking practice sessions'
    ],
    highlight: false
  }
];
