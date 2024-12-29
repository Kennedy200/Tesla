import React from "react";
export default function TeslaInfoSection() {
    const infoContent = [
      {
        title: 'Model S Pricing',
        text: 'Price before estimated savings is $46,630, including Destination and Order Fees, but excluding taxes and other fees. Estimated savings includes $6,500 in gas savings over five years and $7,500 Federal Tax Credit. Terms apply.',
      },
      {
        title: 'Model 3 Pricing',
        text: 'Price before estimated savings is $44,130, including Destination and Order Fees, but excluding taxes and other fees. Vehicle shown has upgrades that increase the price. Terms apply.',
      },
      {
        title: 'Model X Pricing',
        text: 'Price before estimated savings is $81,630, including Destination and Order Fees, but excluding taxes and other fees. Eligible for incentives and savings on gas. Terms apply.',
      },
      {
        title: 'Model Y Pricing',
        text: 'Price before estimated savings is $81,630, including Destination and Order Fees, but excluding taxes and other fees. Eligible for incentives. Terms apply.',
      },
      {
        title: 'Cybertruck Leasing',
        text: 'Monthly lease based on $79,990 Cybertruck All-Wheel Drive purchase price. Requires $7,500 down with 36 months and 10,000 miles annually. Subject to approval. Terms apply.',
      },
    ];
  
    return (
      <section className="bg-[#0D1117] text-white py-24 px-8 md:px-24">
        <h2 className="text-6xl font-extrabold text-center mb-16">
          Everything You Need to Know
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {infoContent.map((item, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-to-br from-[#11161D] to-[#1A1F29] rounded-xl shadow-xl transition duration-300 hover:scale-105"
            >
              <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
              <p className="text-lg leading-relaxed">{item.text}</p>
  
              {/* Hover Effect Line */}
              <div className="absolute bottom-4 left-8 w-24 h-1 bg-[#E50914] transition-all duration-300 group-hover:w-40"></div>
            </div>
          ))}
        </div>
  
<div className="flex justify-center mt-20">
  <a 
    href="https://www.tesla.com/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="bg-[#E50914] hover:bg-[#FF1E1E] text-white px-8 py-4 text-xl font-semibold rounded-full shadow-lg transform hover:scale-110 transition">
      Schedule a Drive Today
    </button>
  </a>
</div>

      </section>
    );
  }
  