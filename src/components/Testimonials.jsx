import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Elena Carter',
            handle: '@elenatrades',
            date: 'July 12, 2025',
            review: 'ECAPFX transformed my trading game! The intuitive interface and real-time analytics make it so easy to stay ahead of the market. I’ve never felt more confident in my decisions.'
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Marcus Lin',
            handle: '@marcuslinfx',
            date: 'August 3, 2025',
            review: 'I was skeptical at first, but ECAPFX’s low fees and lightning-fast execution blew me away. It’s like having a pro trader in my pocket. Highly recommend to anyone serious about forex!'
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Nebojsa',
            handle: '@earnings4all',
            date: 'June 28, 2025',
            review: 'The charting tools on ECAPFX are next-level. I can customize everything to fit my strategy, and the support team is always there when I need them. It’s a game-changer for my portfolio.'
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'James Patel',
            handle: '@jamesp_trader',
            date: 'July 30, 2025',
            review: 'ECAPFX’s mobile app is a lifesaver for trading on the go. The seamless sync between desktop and mobile means I never miss an opportunity. Absolutely love the user experience!'
        },
        {
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200',
            name: 'Tara Nguyen',
            handle: '@tarawinsfx',
            date: 'July 25, 2025',
            review: 'ECAPFX’s risk management tools are phenomenal. I feel so much more in control of my trades, and the platform’s alerts keep me on top of every market move.'
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
            name: 'Liam Brooks',
            handle: '@liamtradesmart',
            date: 'August 1, 2025',
            review: 'The educational resources on ECAPFX are top-notch. As a beginner, I learned so much, and the platform’s ease of use made my first trades a breeze.'
        },
        {
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200',
            name: 'Amara Singh',
            handle: '@amarafxpro',
            date: 'June 15, 2025',
            review: 'ECAPFX’s customer support is unreal—fast, friendly, and super knowledgeable. They helped me navigate a tricky trade setup, and now I’m seeing consistent gains.'
        },
        {
            image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200',
            name: 'Chloe Evans',
            handle: '@chloecurrency',
            date: 'July 18, 2025',
            review: 'I love how ECAPFX integrates market news directly into the platform. It saves me so much time, and I can make informed trades without jumping between apps.'
        },
        {
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
            name: 'Noah Kim',
            handle: '@noahfxguru',
            date: 'July 5, 2025',
            review: 'The leverage options on ECAPFX are so flexible, and the platform’s transparency about fees is refreshing. It’s hands-down the best forex platform I’ve used.'
        },
        {
            image: 'https://images.unsplash.com/photo-1517365830460-955ce3f6b1f7?q=80&w=200',
            name: 'Isabella Ruiz',
            handle: '@isabellaruizfx',
            date: 'August 4, 2025',
            review: 'ECAPFX’s demo account helped me practice without risking a dime. When I went live, the transition was seamless. Perfect for traders at any level!'
        },
        {
            image: 'https://images.unsplash.com/photo-1506794778202-6d1d5a6b0b6b?q=80&w=200',
            name: 'Ethan Clarke',
            handle: '@ethanprofit',
            date: 'June 20, 2025',
            review: 'The speed of ECAPFX’s order execution is insane. I’ve never experienced slippage, and that’s a big deal for my scalping strategy. Loving it!'
        },
        {
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200',
            name: 'Maya Patel',
            handle: '@mayatradesfx',
            date: 'July 22, 2025',
            review: 'ECAPFX’s community forums are a goldmine. Connecting with other traders and sharing strategies has taken my trading to the next level.'
        },
        {
            image: 'https://images.unsplash.com/photo-1502768040783-423da5fd1456?q=80&w=200',
            name: 'Lucas Grant',
            handle: '@lucasfxwave',
            date: 'July 10, 2025',
            review: 'The variety of currency pairs on ECAPFX is impressive. I can diversify my trades easily, and the platform’s stability is rock-solid even during volatile markets.'
        },
        {
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200',
            name: 'Olivia Harper',
            handle: '@oliviafxqueen',
            date: 'June 30, 2025',
            review: 'ECAPFX’s clean design and powerful tools make trading feel effortless. I’ve cut my research time in half and doubled my confidence in every trade.'
        },
        {
            image: 'https://images.unsplash.com/photo-1503443207922-3a7a12d7a928?q=80&w=200',
            name: 'Ryan Foster',
            handle: '@ryanfxpro',
            date: 'August 2, 2025',
            review: 'Switching to ECAPFX was the best decision I made this year. The platform’s automation features save me hours, and the insights are always spot-on.'
        },
        {
            image: 'https://images.unsplash.com/photo-1511367461989-2de3e66f2295?q=80&w=200',
            name: 'Zara Khan',
            handle: '@zarawealth',
            date: 'July 28, 2025',
            review: 'ECAPFX’s security features give me peace of mind. Knowing my funds are safe lets me focus on trading, and the platform’s performance is flawless.'
        }
    ];

    const CreateCard = ({ card }) => (
        <div
            className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white"
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div className="flex gap-2">
                <img className="size-11 rounded-full" src={card.image} alt="User Image" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p>{card.name}</p>
                        <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                                fill="#2196F3"
                            />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-500">{card.handle}</span>
                </div>
            </div>
            <p className="text-sm py-4 text-gray-800">{card.review}</p>
            <div className="flex items-center justify-between text-slate-500 text-xs">
                <div className="flex items-center gap-1"></div>
                <p>{card.date}</p>
            </div>
        </div>
    );

    return (
        <>
            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                .marquee-inner {
                    animation: marqueeScroll 40s linear infinite;
                    will-change: transform;
                }

                .marquee-reverse {
                    animation-direction: reverse;
                }
            `}</style>

            <div className="w-full bg-[#ffffff] py-10">
                <h2
                    className="text-4xl mt-20 lg:text-5xl font-extrabold tracking-tight text-center text-gray-800 mb-8"
                    data-aos="fade-up"
                >
                    What people are saying about ECAPFX
                </h2>
                <div className="marquee-row w-full mx-auto max-w-7xl px-6 lg:px-12 overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#ffffff] to-transparent"></div>
                    <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={index} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#ffffff] to-transparent"></div>
                </div>

                <div className="marquee-row w-full mx-auto max-w-7xl px-6 lg:px-12 overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#ffffff] to-transparent"></div>
                    <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={index} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#ffffff] to-transparent"></div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;