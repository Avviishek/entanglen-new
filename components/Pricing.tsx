import React from 'react';
import { PRICING_PLANS } from '../constants';
import Button from './shared/Button';

interface PricingProps {
  onChooseSubject?: (subject: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onChooseSubject }) => {
  // Change this to "$" for dollar or "₹" for rupee
  const currency = "$";

  return (
    <section id="subjects" className="py-16 sm:py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Subjects & Monthly Fees</h2>
          <p className="mt-4 text-lg text-gray-600">
            Learn at your own pace. Transparent fees. Choose the subject that inspires you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">
          {PRICING_PLANS.map(subject => (
            <div
              key={subject.plan}
              className={`bg-white rounded-xl shadow-lg p-8 flex flex-col ${
                subject.highlight ? 'border-4 border-orange-500 transform scale-105' : 'border'
              }`}
            >
              {subject.highlight && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold text-white bg-orange-500">
                    Most Popular
                  </span>
                </div>
              )}
              {/* Subject Name */}
              <h3 className="text-2xl font-bold text-center text-gray-900">{subject.plan}</h3>
              
              {/* Monthly Fee */}
              <div className="mt-4 text-center">
                <span className="text-5xl font-extrabold text-gray-900">
                  {currency}{subject.price}
                </span>
                <span className="text-base font-medium text-gray-500">/month</span>
              </div>

              {/* Cost per hour */}
              <p className="mt-2 text-center text-gray-500">
                {currency}{subject.costPerHour}/hr
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-4 text-gray-600 flex-grow">
                {subject.features.map(feature => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Choose Subject Button */}
              <div className="mt-8">
                <Button
                  variant={subject.highlight ? 'primary' : 'secondary'}
                  size="large"
                  className="w-full"
                  onClick={() => onChooseSubject && onChooseSubject(subject.plan)}
                >
                  Choose Subject
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
