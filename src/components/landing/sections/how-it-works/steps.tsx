'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import Step2Icon from './step2';
import Step3Icon from './step3';
import Step4Icon from './step4';
import Step1Icon from './step1';
import clsx from 'clsx';

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
        <div className="space-y-12">
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
              className="absolute top-1/2 left-0 h-1 bg-[#3553FD] -translate-y-1/2 transition-all duration-500"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
            <div className="relative w-full flex justify-around">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${
                      index <= currentStep ? 'bg-[#3553FD]' : 'bg-gray-300'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Step titles and descriptions */}
          <div className="grid grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className={`text-center transition-all duration-500 `}>
                <h3 className={clsx('text-lg font-bold text-[#494C55] mb-2', index <= currentStep && 'text-[#40527C]')}>
                  {step.title}
                </h3>
                <p className={clsx('text-xs text-[#576180] leading-relaxed', index <= currentStep && 'text-[#576180]')}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden px-4">
        <div className="flex flex-row justify-between gap-4">
          <div className="flex flex-col justify-around">
            {steps.map((step, index) => (
              <img
                key={step.id}
                className="h-12 w-12"
                src={`/images/home/how-it-works/step${index + 1}-${currentStep >= index ? 'light' : 'dark'}.svg`}
                alt={'step-icon'}
              />
            ))}
          </div>
          <div className="flex flex-col justify-between relative">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col  items-center flex-shrink-0">
                <div className="absolute top-0 bottom-0 w-1 bg-gray-200" />

                <div
                  className="absolute top-0 w-1 bg-[#3553FD] transition-all duration-500"
                  style={{
                    height: `${((currentStep + 1) / steps.length) * 100}%`,
                  }}
                />

                <div
                  className={`z-10 w-3 h-3 rounded-full flex items-center justify-center transition-all duration-500 ${
                    index <= currentStep ? 'bg-[#3553FD] text-white' : 'bg-gray-300 text-gray-600'
                  }`}
                ></div>
              </div>
            ))}
          </div>
          <div>
            {steps.map((step, index) => (
              <div key={step.id} className="flex gap-6">
                <div
                  className={`pt-1 transition-all duration-500 ${index <= currentStep ? 'opacity-100' : 'opacity-50'}`}
                >
                  <h3
                    className={`text-xs font-bold mb-1 transition-colors duration-500 ${
                      index <= currentStep ? 'text-[#4D68A7]' : 'text-[#999999]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-xs text-gray-600 leading-relaxed mb-3 ${
                      index <= currentStep ? 'text-[#4D68A7]' : 'text-[#999999]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
