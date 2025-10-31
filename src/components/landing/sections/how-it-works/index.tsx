"use client";

import { useState } from "react";
import Steps from "./steps";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<string>("buyers");

  return (
    <>
      <div className="h-14 w-full border-0 bg-[#000120] focus-visible:ring-0">
        <div className="rounded-b-5xl h-14 bg-white" />
      </div>
      <div className="bg-opacity-50 font-outfit rounded-b-5xl mx-auto mb-15 flex min-h-screen flex-col items-center border-0 bg-gradient-to-r bg-[url(/images/home/how-it-works/cover.png)] from-[#1D1B59] via-[#1D1B59] to-[#24217D] bg-cover p-8 backdrop-blur-lg backdrop-filter">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            How Trade.ma works ?
          </h1>
          <p className="text-base font-light text-white">
            Simple steps to connect with Moroccan suppliers & grow your business
          </p>
        </div>
        <div className="flex justify-center p-8">
          <div className="inline-flex rounded-full bg-[#ffffff] p-1">
            {["buyers", "sellers"].map((tab: string) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-30 cursor-pointer rounded-full py-2 text-base font-medium transition-colors md:w-60 ${
                  activeTab === tab
                    ? "bg-cyan text-[#ffffff]"
                    : "bg-transparent text-black"
                }`}
              >
                {tab === "buyers" ? "For Buyers" : "For Sellers"}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white p-10 md:p-12">
          <h2 className="mb-8 text-center text-lg font-bold text-black md:text-xl">
            Un parcours d'achat B2B fluide & sécurisé -{" "}
            <span className="text-cyan capitalize">{activeTab}</span>
          </h2>
          <Steps />
        </div>
      </div>
    </>
  );
}
