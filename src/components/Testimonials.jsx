import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  const innerRef = useRef(null);
  const reverseInnerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [reverseScrollWidth, setReverseScrollWidth] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
    const timer = setTimeout(() => AOS.refresh(), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (innerRef.current) {
      const totalWidth = innerRef.current.scrollWidth;
      setScrollWidth(totalWidth / 2);
    }
    if (reverseInnerRef.current) {
      const totalWidth = reverseInnerRef.current.scrollWidth;
      setReverseScrollWidth(totalWidth / 2);
    }
  }, []);

  // JavaScript fallback for pause-on-hover
  useEffect(() => {
    const rows = document.querySelectorAll('.marquee-row');

    rows.forEach((row) => {
      const cards = row.querySelectorAll('.card');
      cards.forEach((card) => {
        const handleMouseEnter = () => {
          row.classList.add('paused');
        };
        const handleMouseLeave = () => {
          row.classList.remove('paused');
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Store handlers for cleanup
        card._handleMouseEnter = handleMouseEnter;
        card._handleMouseLeave = handleMouseLeave;
      });
    });

    return () => {
      rows.forEach((row) => {
        const cards = row.querySelectorAll('.card');
        cards.forEach((card) => {
          if (card._handleMouseEnter) {
            card.removeEventListener('mouseenter', card._handleMouseEnter);
          }
          if (card._handleMouseLeave) {
            card.removeEventListener('mouseleave', card._handleMouseLeave);
          }
        });
      });
    };
  }, []);

  const cardsData = [
    {
      image: 'https://scontent.fbeg2-1.fna.fbcdn.net/v/t39.30808-6/502375006_644484481945735_2891722523436855694_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z076C6VtEGsQ7kNvwF_TOp_&_nc_oc=Adlkr2Zq6_Bz9dNftiYqVzsEyMx0mJ4roeuuK_wTKGzE0ok5MuXTen5hI5e5jFbNkiU&_nc_zt=23&_nc_ht=scontent.fbeg2-1.fna&_nc_gid=PqVMRtCIdXK7QCt9EqEkqA&oh=00_AfUSrgVyCmXHjQezaGLjLKQ62yUtmKNkjyj0rOijjnO54w&oe=689F9ED2',
      name: 'Marco Mojza',
      handle: '@marcomojza',
      date: 'August 3, 2025',
      review: 'Hi I am Marco, I am a retail funded trader I also run my own firm. For a new firm i am super impressed with the trading platform the spreads and conditions. Great stuff so far.'
    },
    {
      image: 'https://scontent.fbeg1-1.fna.fbcdn.net/v/t39.30808-6/467759959_10235633853485931_5066870383546108538_n.jpg?_nc_cat=103&ccb=1-7&_nc_ohc=Zg8WkYEe-04Q7kNvwH331KK&_nc_oc=AdnqZ13YdhbT86FtQNohrknIImouY3uquvRAMdhGPg7t8nGZK0rNo0NYQ1dFoKyJ9zo&_nc_zt=23&_nc_ht=scontent.fbeg1-1.fna&_nc_gid=yos1vgYCp48r98uTlj9u_g&oh=00_AfU-Vwvty7xz4ytXR9U2Tt5wpnEMwGbY5aHlEGsFrEUTWQ&oe=689E755A',
      name: 'Daniel Wolterman',
      handle: '@danielwalterman',
      date: 'August 8, 2025',
      review: 'My main positives I can speak on are the pair selection available. And the ability to join a CFD firm again with being a US citizen after a lot had removed that with the main prop experience coming from futures platforms from that perspective and having a firm that opens up more for holds over night which futures and top step don’t allow from what I have currently passed.',
    },
    {
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200',
      name: 'Tara Nguyen',
      handle: '@tarawinsfx',
      date: 'July 25, 2025',
      review: 'Risk management tools are phenomenal. I feel so much more in control of my trades, and the platform’s alerts keep me on top of every market move.'
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      name: 'James Patel',
      handle: '@jamesp_trader',
      date: 'July 30, 2025',
      review: 'Mobile app is a lifesaver for trading on the go. The seamless sync between desktop and mobile means I never miss an opportunity. Absolutely love the user experience!'
    },
    {
      image: 'https://scontent.fbeg1-1.fna.fbcdn.net/v/t39.30808-6/466402931_10230485898385264_1334459201437981814_n.jpg?_nc_cat=100&ccb=1-7&_nc_ohc=cZ92p7aadWwQ7kNvwHoscF4&_nc_oc=Admk8C489Y6C0sRQCgBm2qwIg9k3qJn0oHFh5Pr3LOkHc1l0w4vP1eeZEKM24d7rkhI&_nc_zt=23&_nc_ht=scontent.fbeg1-1.fna&_nc_gid=-S7ZGSAsKVqEDa3-nr6owA&oh=00_AfVLRY9woi93xgQNaZv53aXXRcC22knXntWsOomnLlwi7A&oe=689E4EE4',
      name: 'Nebojsa',
      handle: '@earnings4all',
      date: 'June 28, 2025',
      review: 'I can customize everything to fit my strategy, great support team is always there when I need them. Discord community is always there for you, it’s a game-changer for my portfolio.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      name: 'Liam Brooks',
      handle: '@liamtradesmart',
      date: 'August 1, 2025',
      review: 'The educational resources are top-notch. As a beginner, I learned so much, and the platform’s ease of use made my first trades a breeze.'
    },
    {
      image: 'https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.6435-9/41876451_1914963488550658_4252643605933457408_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jwWCJyyAb9oQ7kNvwFbPLuW&_nc_oc=AdmiNxXxnsTbePbtd6J8typgmaSfqgHzL-7N_LoXjPqm6pqKAnzTrmp1E60Cl59NGXY&_nc_zt=23&_nc_ht=scontent.fbeg1-1.fna&_nc_gid=en59fSFbcw5NHvRQSgCedA&oh=00_AfX6JbtW-FQ-KAKb5ALtaeErIZE1UcU9yFt6wlg2M-xyDg&oe=68BFF97B',
      name: 'Karlis Manins',
      handle: '@karlis_trades',
      date: 'August 8, 2025',
      review: 'If you’re a new trader looking for a reliable, user-friendly prop firm, this one is worth considering. The Match-Trader platform is smooth, fast, and has instant execution with no delays, plus a built-in economic calendar and optional TradingView charts for easy analysis. Tight, stable spreads with no spikes during news keep trading stress-free, and the affordable challenges make it accessible for all levels. A fast, reliable, and cost-effective choice. Highly recommended!'
    },
    {
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200',
      name: 'Amara Singh',
      handle: '@amarafxpro',
      date: 'June 15, 2025',
      review: 'Customer support is really fast, friendly, and super knowledgeable. They helped me navigate a tricky trade setup, and now I’m seeing consistent gains.'
    },
    {
      image: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=200',
      name: 'Karol Liston',
      handle: '@karolliston',
      date: 'August 9, 2025',
      review: 'Just purchased challenge account. This is by far the easiest prop firm platform I have ever used. So easy to calculate lot size and risk. And where to put TP and SL. The future for really is limitless.'
    },
    {
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200',
      name: 'Chloe Evans',
      handle: '@chloecurrency',
      date: 'July 18, 2025',
      review: 'I love how integrates market news directly into the platform. It saves me so much time, and I can make informed trades without jumping between apps.'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      name: 'Noah Kim',
      handle: '@noahfxguru',
      date: 'July 5, 2025',
      review: 'The leverage options on are so flexible, and the platform’s transparency about fees is refreshing. It’s hands-down the best forex platform I’ve used.'
    },
    {
      image: 'https://quantumaiplatform.com/wp-content/uploads/2023/12/ai-researcher-2-1.jpg',
      name: 'Maya Patel',
      handle: '@mayatradesfx',
      date: 'July 22, 2025',
      review: 'Connecting with other traders, sharing strategies, and learning from their experiences has taken my trading to the next level. The diverse perspectives and real-time insights you gain from these discussions are invaluable for staying ahead in the market.'
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
      name: 'Alex Rivera',
      handle: '@alexproppro',
      date: 'August 10, 2025',
      review: 'The Match Trader platform setup is incredibly smooth, with transparent rules and a fair profit split. Support team is always on point. I love how it supports scalping and news trading on Match Trader, giving me the flexibility to trade with confidence—no delays or issues with execution.'
    },
    {
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200',
      name: 'Jordan Lee',
      handle: '@jordanfxelite',
      date: 'August 7, 2025',
      review: 'The dashboard is user-friendly, and the fast execution on Match Trader makes it perfect for serious traders.'
    },
    {
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
      name: 'Casey Wong',
      handle: '@caseypropwin',
      date: 'August 9, 2025',
      review: 'This is the best platform for prop traders. Many of my trading buddies use it and Match Trader’s is really easy to use. Seamless trading experience keep me coming back.'
    }
  ];

  const CreateCard = ({ card }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef(null);
    const maxLength = 100;
    const isLongReview = card.review.length > maxLength;
    const truncatedReview = isLongReview ? card.review.slice(0, maxLength) + '...' : card.review;

    useEffect(() => {
      if (!isExpanded) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            setIsExpanded(false);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, [isExpanded]);

    return (
      <div
        ref={cardRef}
        className="card p-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex gap-2">
          <img className="size-11 rounded-full" src={card.image} alt="User Image" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p>{card.name}</p>
              <svg className="mt-0.5" width="13" height="13" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                  fill="#4276f0ff"
                />
              </svg>
            </div>
            <span className="text-xs text-slate-500">{card.handle}</span>
          </div>
        </div>
        <p className="text-sm py-4 text-gray-800">
          {isExpanded || !isLongReview ? card.review : truncatedReview}
          {isLongReview && !isExpanded && (
            <button
              className="text-[#145c33] hover:text-[#03a84e] text-sm font-medium ml-2"
              onClick={() => setIsExpanded(true)}
            >
              Read more
            </button>
          )}
          {isLongReview && isExpanded && (
            <button
              className="text-[#145c33] hover:text-[#03a84e] text-sm font-medium ml-2"
              onClick={() => setIsExpanded(false)}
            >
              Read less
            </button>
          )}
        </p>
        <div className="flex items-center justify-between text-slate-500 text-xs">
          <div className="flex items-center gap-1"></div>
          <p>{card.date}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${scrollWidth}px); }
        }
        @keyframes marqueeScrollReverse {
          0% { transform: translateX(-${reverseScrollWidth}px); }
          100% { transform: translateX(0); }
        }
        .marquee-inner {
          will-change: transform;
          animation-play-state: running;
        }
        /* Pause animation when marquee-row has .paused (JS fallback) */
        .marquee-row.paused .marquee-inner {
          animation-play-state: paused;
        }
        /* Pause animation when any card is hovered (CSS :has()) */
        .marquee-row:has(.card:hover) .marquee-inner {
          animation-play-state: paused;
        }
        /* Stop the slider completely on card hover */
        .marquee-row .card:hover ~ .marquee-inner,
        .marquee-row .card:hover .marquee-inner {
          animation: none;
        }
        /* Restart the slider when hover ends */
        .marquee-row .marquee-inner {
        animation: ${scrollWidth ? `marqueeScroll ${Math.round(0.025 * scrollWidth)}s linear infinite` : 'none'};
        }
        .marquee-row.reverse .marquee-inner {
        animation: ${reverseScrollWidth ? `marqueeScrollReverse ${Math.round(0.025 * reverseScrollWidth)}s linear infinite` : 'none'};
        }
        /* Ensure child elements don't interfere with hover */
        .card * {
          pointer-events: none;
        }
        /* Re-enable pointer events for interactive elements */
        .card button {
          pointer-events: auto;
        }
      `}</style>

      <section className="w-full bg-[#ffffff] relative">
        <h2
          className="text-4xl lg:text-5xl font-extrabold tracking-tight text-center text-black pt-[110px] pb-[80px] uppercase"
          data-aos="fade-up"
        >
          What traders say about ECAPFX
        </h2>
        <div className="marquee-row w-full mx-auto max-w-7xl px-6 lg:px-12 overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#ffffff] to-transparent"></div>
          <div
            ref={innerRef}
            className="marquee-inner flex flex-nowrap transform-gpu gap-8 pt-10 pb-5"
            >
            {cardsData.map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
            {cardsData.map((card, index) => (
              <CreateCard key={`dup-${index}`} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#ffffff] to-transparent"></div>
        </div>

        <div className="marquee-row reverse w-full mx-auto max-w-7xl pb-14 px-6 lg:px-12 overflow-hidden relative pb-[120px]">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#ffffff] to-transparent"></div>
          <div
            ref={reverseInnerRef}
            className="marquee-inner flex flex-nowrap transform-gpu gap-8 pt-10 pb-5"
            >
            {cardsData.map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
            {cardsData.map((card, index) => (
              <CreateCard key={`dup-${index}`} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#ffffff] to-transparent"></div>
        </div>
      </section>
      <div className="bg-[#e5e5e5] relative w-full h-32 overflow-hidden z-30">
        <svg
          className="absolute top-0 left-0 w-full h-full custom-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="#ffffff" points="0,0 100,50 100,0" />
        </svg>
      </div>
      <style>{`
        .custom-svg polygon {
          fill: #ffffff !important;
        }
      `}</style>
    </>
  );
};

export default Testimonials;