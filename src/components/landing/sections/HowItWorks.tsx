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
    <div className="min-h-screen bg-gradient-to-br from-[#1D1B59] via-[#1D1B59] to-[#24217D] p-8 flex flex-col items-center mx-auto my-15 font-outfit bg-[url(/images/home/how-it-works/cover.png)] rounded-b-3xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">How Trade.ma works ?</h1>
        <p className="text-white text-base font-light">
          Simple steps to connect with Moroccan suppliers & grow your business
        </p>
      </div>
      {/* Tab Toggle */}
      <div className="flex justify-center p-8">
        <div className="inline-flex bg-[#ffffff] rounded-full p-1">
          {['buyers', 'sellers'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-base w-60 py-2 rounded-full font-medium transition-colors ${
                activeTab === tab ? 'bg-cyan text-[#ffffff]' : 'bg-transparent text-black'
              }`}
            >
              {tab === 'buyers' ? 'For Buyers' : 'For Sellers'}
            </button>
          ))}
        </div>
      </div>
      <div className="container mx-auto bg-white rounded-3xl p-10 md:p-12 h-100">
        <h2 className="text-lg md:text-xl font-bold text-black text-center mb-8">
          Un parcours d'achat B2B fluide & sécurisé - Buyers
        </h2>
        <div className="relative">
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-[#dddddd]">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-black" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-row md:flex-col items-center text-center">
                <div
                  className={`w-6 h-6 rounded-full mb-3 relative z-5 flex items-center justify-center ${
                    step.active ? 'bg-[#414342]' : 'bg-[#eeeeee]'
                  }`}
                ></div>
                <h3 className="font-bold text-black text-xs md:text-sm mb-3">{step.title}</h3>
                <p className="text-[#423d3d] text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
