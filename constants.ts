
import { Tutor, Testimonial, PricingPlan } from './types';

export const TUTORS: Tutor[] = [
  {
    id: 1,
    name: 'Harsh Verma',
    image: '1.png',
    subjects: ['Mathematics', 'Physics'],
    experience: '4+ years',
    languages: ['English'],
    availability: 'Full-time',
    testimonial: 'Harsh makes complex physics concepts easy to understand. Highly recommended!'
  },
  {
    id: 2,
    name: 'Rahul Boora',
    image: '2.jpeg',
    subjects: ['Chemistry', 'Physics'],
    experience: '5+ years',
    languages: ['English'],
    availability: 'Full-time',
    testimonial: 'Rahul is an amazing chemistry & Physics tutor. My grades have improved significantly.'
  },
  {
    id: 3,
    name: 'Kanupriya Sigh',
    image: '/3.jpeg',
    subjects: ['English'],
    experience: '3+ years',
    languages: ['English'],
    availability: 'Full-time',
    testimonial: 'Kanupriya is a patient and knowledgeable teacher, especially for English.'
  },
  {
    id: 4,
    name: 'Mohanraj T',
    image: '/4.jpeg',
    subjects: ['Computer Science'],
    experience: '7+ years',
    languages: ['English'],
    availability: 'Full-time',
    testimonial: 'Mohanraj is an exceptional Computer Science tutor. His way of breaking down coding concepts makes learning enjoyable and practical.'
  },
  {
    id: 5,
    name: 'Vineeta Sharma',
    image: '/5.jpeg',
    subjects: ['Mathematics', 'Science'],
    experience: '7+ years',
    languages: ['English'],
    availability: 'Full-time',
    testimonial: 'Vineeta has a wonderful way of making Mathematics and Science easy to understand and engaging for students.'
  },
  {
    id: 6,
    name: 'Manoj Sharma',
    image: '/6.jpeg',
    subjects: ['English'],
    experience: '4+ years',
    languages: ['English'],
    availability: 'Full-time',
    testimonial: 'Manoj makes learning English enjoyable and interactive. She focuses on clear explanations and practical examples that build real confidence in communication.'
  },
  {
    id: 7,
    name: 'Ritesh Kumar Singh',
    image: '/7.jpeg',
    subjects: ['English'],
    experience: '5+ years',
    languages: ['English'],
    availability: 'Full-time',
    testimonial: 'Ritesh makes English easy and fun to learn!'
  },
  {
    id: 8,
    name: 'Harshit Malvijay',
    image: '/8.jpeg',
    subjects: ['Coding', 'Mathematics'],
    experience: '2+ years',
    languages: ['English'],
    availability: 'Full-time',
    testimonial: 'Harshit explains coding and math in a way that’s simple and clear.'
  },
  {
    id: 9,
    name: 'Sujata Singh',
    image: '/9.jpeg',
    subjects: ['Biology', 'Chemistry'],
    experience: '4+ years',
    languages: ['English'],
    availability: 'Full-time',
    testimonial: 'Sujata explains biology and chemistry so clearly that tough topics feel simple.'
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
