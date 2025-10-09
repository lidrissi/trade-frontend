'use client';

import { useState } from 'react';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'buyers' | 'sellers'>('buyers');

  const steps = [
    {
      title: 'Search Products',
      description: 'Quickly find the right products thanks to our simple and efficient search.',
      active: true,
    },
    {
      title: 'Request Quotes',
      description: 'Get a personalized quote in just a few clicks to better plan your purchases.',
      active: true,
    },
    {
      title: 'Compare & Order',
      description: 'Compare product prices and features, then order with ease.',
      active: false,
    },
    {
      title: 'Track delivery',
      description: 'Track the progress of your order in real time until delivery.',
      active: false,
    },
  ];

  return (
    <div className="bg-[#292626] p-8 mx-auto mb-5">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4">How Trade.ma works ?</h1>
        <p className="text-[#eeeeee] text-lg">Simple steps to connect with Moroccan suppliers & grow your business</p>
      </div>

      {/* Tab Toggle */}
      <div className="flex justify-center p-8">
        <div className="inline-flex bg-[#ffffff] rounded-full p-1">
          <button
            onClick={() => setActiveTab('buyers')}
            className={`px-8 py-3 rounded-full font-medium transition-colors ${
              activeTab === 'buyers' ? 'bg-[#292626] text-[#ffffff]' : 'bg-transparent text-[#292626]'
            }`}
          >
            For Buyers
          </button>
          <button
            onClick={() => setActiveTab('sellers')}
            className={`px-8 py-3 rounded-full font-medium transition-colors ${
              activeTab === 'sellers' ? 'bg-[#292626] text-[#ffffff]' : 'bg-transparent text-[#292626]'
            }`}
          >
            For Sellers
          </button>
        </div>
      </div>
      {/* Content Card */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-12 md:p-16">
        <h2 className="text-2xl md:text-xl font-bold text-[#292626] text-center mb-8">
          Un parcours d'achat B2B fluide & sécurisé - Buyers
        </h2>

        {/* Progress Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-[#dddddd] hidden md:block">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-[#292626]" />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Step Circle */}
                <div
                  className={`w-6 h-6 rounded-full mb-3 relative z-5 flex items-center justify-center ${
                    step.active ? 'bg-[#292626]' : 'bg-[#dddddd]'
                  }`}
                >
                  {/* <div className={`w-6 h-6 rounded-full bg-[#ffffff]`} /> */}
                </div>

                {/* Step Content */}
                <h3 className="font-bold text-[#292626] text-lg mb-3">{step.title}</h3>
                <p className="text-[#423d3d] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
