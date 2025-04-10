import React, { useEffect, useRef } from 'react';

const teamMembers = [
  { name: 'Michael Pearn', role: 'Founder & CEO', desc: 'Leads the firm with experience in trading.' },
  { name: 'Carly Pearn', role: 'Chief Sustainability Officer', desc: 'Oversees sustainability efforts.' },
  { name: 'Nebojša Sladoje', role: 'COO', desc: 'Manages operations and internal teams.' },
  { name: 'Maja Marković', role: 'Lead Developer', desc: 'Optimizes the platform experience.' },
  { name: 'Nikola Ilić', role: 'Lead Developer', desc: 'Maintains the trading system infrastructure.' },
];

const Team = () => {
  const marqueeRef = useRef(null);

  // Funkcija za dinamičko popunjavanje trake
  const generateMarqueeContent = () => {
    const screenWidth = window.innerWidth;
    const cardWidth = 288; // w-72 = 18rem = 288px (pretpostavljena širina kartice sa marginom)
    const cardsPerScreen = Math.ceil(screenWidth / cardWidth) * 2; // Dovoljno kartica za 2 ekrana
    const totalCards = Math.max(cardsPerScreen, teamMembers.length * 2); // Minimalno 2x originalni niz

    const repeatedMembers = [];
    for (let i = 0; i < totalCards; i++) {
      repeatedMembers.push(teamMembers[i % teamMembers.length]);
    }
    return repeatedMembers;
  };

  const marqueeContent = generateMarqueeContent();

  return (
    <section className="bg-[#101919] py-24 text-white text-center overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-12">Meet Our Team</h2>

      <div className="relative w-full overflow-hidden">
        <div ref={marqueeRef} className="flex animate-marquee whitespace-nowrap gap-6 px-6">
          {marqueeContent.map((member, idx) => (
            <div
              key={idx}
              className="bg-white text-black w-72 flex-shrink-0 rounded-xl shadow-md p-6 border-t-4 border-yellow-600"
            >
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-yellow-600 text-md mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;