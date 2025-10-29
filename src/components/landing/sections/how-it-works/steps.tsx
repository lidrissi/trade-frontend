'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import Step2Icon from './step2';
import Step3Icon from './step3';
import Step4Icon from './step4';
import Step1Icon from './step1';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.FC<{ active: boolean }>;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Search Products',
    description: 'Quickly find the right products thanks to our simple and efficient search.',
    icon: Step1Icon,
  },
  {
    id: 2,
    title: 'Request Quotes',
    description: 'Get a personalized quote in just a few clicks to better plan your purchases.',
    icon: Step2Icon,
  },
  {
    id: 3,
    title: 'Compare & Order',
    description: 'Compare product prices and features, then order with ease.',
    icon: Step3Icon,
  },
  {
    id: 4,
    title: 'Track delivery',
    description: 'Track the progress of your order in real time until delivery.',
    icon: Step4Icon,
  },
];

function Steps() {
  const [currentStep, setCurrentStep] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev === steps.length - 1 ? -1 : (prev + 1) % steps.length));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="hidden md:block">
        <div className="space-y-8">
          <div className="relative w-full flex justify-around">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <img
                  src={`/images/home/how-it-works/step${index + 1}-${currentStep >= index ? 'light' : 'dark'}.svg`}
                  alt={'step-icon'}
                  className={'h-22'}
                />
              </div>
            ))}
          </div>
          <div className="relative flex items-center">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-500"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
            <div className="relative w-full flex justify-around">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${
                      index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Step titles and descriptions */}
          <div className="grid grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`text-center transition-all duration-500 ${
                  index === currentStep ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden px-4">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200" />

          <div
            className="absolute left-6 top-0 w-1 bg-blue-600 transition-all duration-500"
            style={{
              height: `${((currentStep + 1) / steps.length) * 100}%`,
            }}
          />
          <div className="space-y-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex gap-6">
                {/* Circle indicator */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    <img src={'/images/home/how-it-works/step1-dark.svg'} alt={'step-icon'} className={'w-6 h-6'} />
                  </div>
                </div>

                <div
                  className={`pt-1 transition-all duration-500 ${index <= currentStep ? 'opacity-100' : 'opacity-50'}`}
                >
                  <h3
                    className={`text-lg font-bold mb-1 transition-colors duration-500 ${
                      index <= currentStep ? 'text-blue-600' : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile progress indicator dots */}
        <div className="mt-8 flex justify-center gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Steps;
