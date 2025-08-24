import React from 'react';
import { imageAssets } from '../../data/config';

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            <div 
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: `url('${imageAssets.hero.background}')` }}
                aria-hidden="true"
            ></div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

            <div className="relative w-full h-full flex items-center md:justify-end">
                <div className="w-full md:w-1/2 h-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <div className="px-8 sm:px-12 md:px-16 lg:px-24 text-center md:text-left">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl leading-tight font-script whitespace-nowrap animate-text-glow">
                            Rahaf Jannuod
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl animate-fade-in-up" style={{ animationDelay: '800ms', opacity: 0 }}>
                            Blending art, music, craft, and technology with elegance, energy, and intelligence.
                        </p>
                        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl animate-fade-in-up" style={{ animationDelay: '900ms', opacity: 0 }}>
                            Here, you'll find a collection of my work, a testament to a journey fueled by passion and a relentless desire to create and innovate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;