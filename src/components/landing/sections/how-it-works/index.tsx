'use client';

import { useState } from 'react';
import Steps from './steps';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<string>('buyers');

  return (
    <>
      <div className="w-full h-14 bg-[#000120] border-0 focus-visible:ring-0">
        <div className="bg-white rounded-b-5xl h-14" />
      </div>
      <div className="border-0 bg-opacity-50 backdrop-filter backdrop-blur-lg min-h-screen bg-cover bg-gradient-to-r from-[#1D1B59] via-[#1D1B59] to-[#24217D] p-8 flex flex-col items-center mx-auto mb-15 font-outfit bg-[url(/images/home/how-it-works/cover.png)] rounded-b-5xl">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">How Trade.ma works ?</h1>
          <p className="text-white text-base font-light">
            Simple steps to connect with Moroccan suppliers & grow your business
          </p>
        </div>
        <div className="flex justify-center p-8">
          <div className="inline-flex bg-[#ffffff] rounded-full p-1">
            {['buyers', 'sellers'].map((tab: string) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer text-base w-30 md:w-60 py-2 rounded-full font-medium transition-colors ${
                  activeTab === tab ? 'bg-cyan text-[#ffffff]' : 'bg-transparent text-black'
                }`}
              >
                {tab === 'buyers' ? 'For Buyers' : 'For Sellers'}
              </button>
            ))}
          </div>
        </div>
        <div className=" bg-white rounded-3xl p-10 md:p-12">
          <h2 className="text-lg md:text-xl font-bold text-black text-center mb-8">
            Un parcours d'achat B2B fluide & sécurisé - <span className="text-cyan capitalize">{activeTab}</span>
          </h2>
          <Steps />
        </div>
      </div>
    </>
  );
}
