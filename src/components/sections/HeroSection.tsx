import React from 'react';
import { imageAssets } from '../../data/config';

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="relative h-[75vh] min-h-[600px] max-h-[800px] w-full overflow-hidden">
            <div 
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: `url('${imageAssets.hero.background}')` }}
                aria-hidden="true"
            ></div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

            <div className="relative w-full h-full flex items-center md:justify-end">
                <div className="w-full md:w-1/2 h-full flex items-center justify-center">
                    <div className="px-8 sm:px-12 md:px-16 lg:px-20 text-center md:text-left">
                        <h1 
                            className="text-5xl md:text-6xl lg:text-7xl leading-tight font-heading whitespace-nowrap"
                            style={{ 
                                color: '#fff',
                                textShadow: `
                                    0 0 2px rgba(255,255,255,.7),
                                    0 0 4px rgba(255,255,255,.5),
                                    0 0 6px rgba(255,255,255,.3),
                                    0 0 10px #D43241aa,
                                    0 0 14px #D4324188,
                                    0 0 18px #D4324144
                                `
                            }}
                        >
                            Rahaf Jannuod
                        </h1>
                        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 mt-4">
                            <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-xl font-body">
                                Blending art, music, craft, and technology with elegance, energy, and intelligence.
                            </p>
                            <p className="mt-3 text-base md:text-lg lg:text-xl text-gray-200 max-w-xl font-body">
                                Here, you'll find a collection of my work, a testament to a journey fueled by passion and a relentless desire to create and innovate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;