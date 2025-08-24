import React from 'react';
import { FadeIn } from './AnimatedHeader';

interface SectionProps {
    id: string;
    backgroundImageUrl: string;
    title: string;
    subtitle: string;
    accentColor: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, backgroundImageUrl, title, subtitle, accentColor, children }) => (
    <section id={id} className="relative text-white overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center filter brightness-[.6]" 
            style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
            aria-hidden="true"
        ></div>
        
        <div className="relative w-full px-4 py-20 md:py-28 z-10">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-2xl p-8 md:p-16">
                <FadeIn>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 
                            className="text-5xl md:text-6xl font-bold mb-6 transition-all duration-300" 
                            style={{ 
                                color: '#fff',
                                textShadow: `
                                    0 0 8px rgba(0,0,0,0.9),
                                    0 2px 4px rgba(0,0,0,0.7),
                                    0 0 2px rgba(255,255,255,.7),
                                    0 0 4px rgba(255,255,255,.5),
                                    0 0 6px rgba(255,255,255,.3),
                                    0 0 10px ${accentColor}aa,
                                    0 0 14px ${accentColor}88,
                                    0 0 18px ${accentColor}44
                                `
                            }}
                        >
                            {title}
                        </h2>
                        <p className="text-lg leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-lg"
                            style={{
                                color: '#fff',
                                textShadow: `
                                    0 0 6px rgba(0,0,0,0.8),
                                    0 1px 3px rgba(0,0,0,0.6),
                                    0 0 10px ${accentColor}44
                                `
                            }}>
                            {subtitle}
                        </p>
                    </div>
                </FadeIn>
                {children}
                </div>
            </div>
        </div>
    </section>
);

export default Section;