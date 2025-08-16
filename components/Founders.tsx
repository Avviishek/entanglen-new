import React from 'react';

const founders = [
  {
    name: 'Avishek Dastidar',
    role: 'Founder',
    image: '/avishek.jpg', // Place avishek.jpg in public folder
  },
  {
    name: 'Mahendra Pratap Singh',
    role: 'Founder',
    image: '/mahendra.jpg', // Place mahendra.jpg in public folder
  },
  {
    name: 'Kunal Kawale',
    role: 'Founder',
    image: 'https://via.placeholder.com/200x200?text=Kunal+Kawale',
  },
];

const Founders: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet the Founders</h2>
        <p className="mt-4 text-lg text-gray-600">Visionaries behind Entangle</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
        {founders.map((founder, idx) => (
          <div key={idx} className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={founder.image}
              alt={founder.name}
              className="h-40 w-40 object-cover rounded-full mb-6 border-4 border-blue-200"
              onError={e => (e.currentTarget.src = 'https://via.placeholder.com/200x200?text=No+Image')}
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
            <p className="text-blue-600 font-semibold mb-2">{founder.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Founders;
