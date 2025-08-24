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
                <div className="w-full md:w-1/2 h-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <div className="px-8 sm:px-12 md:px-16 lg:px-20 text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-script whitespace-nowrap animate-text-glow">
                            Rahaf Jannuod
                        </h1>
                        <p className="mt-3 text-base md:text-lg lg:text-xl text-white max-w-xl animate-fade-in-up" style={{ 
                            animationDelay: '800ms', 
                            opacity: 0,
                            textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}>
                            Blending art, music, craft, and technology with elegance, energy, and intelligence.
                        </p>
                        <p className="mt-3 text-base md:text-lg lg:text-xl text-white max-w-xl animate-fade-in-up" style={{ 
                            animationDelay: '900ms', 
                            opacity: 0,
                            textShadow: '0 0 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}>
                            Here, you'll find a collection of my work, a testament to a journey fueled by passion and a relentless desire to create and innovate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;