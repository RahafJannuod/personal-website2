import React, { useState } from 'react';
import Section from '../Section';
import { FadeIn, FadeInStagger } from '../AnimatedHeader';
import { bandsAndOrchestras } from '../../data/content';
import { themeColors, imageAssets } from '../../data/config';

const MusicSection: React.FC = () => {
    const [showAllBands, setShowAllBands] = useState(false);

    const displayedBands = showAllBands ? bandsAndOrchestras : bandsAndOrchestras.slice(0, 3);

    const handleContactClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    const accentColor = themeColors.accent.music;

    return (
        <Section
            id="music"
            backgroundImageUrl={imageAssets.music.background}
            title="Musician"
            subtitle="Percussionist | Timpanist | Teacher"
            accentColor={accentColor}
        >
            <FadeIn className="mb-16">
                <h3 className="text-4xl font-bold text-center mb-12" 
                    style={{ 
                        color: '#fff',
                        textShadow: `
                            0 0 2px rgba(255,255,255,.7),
                            0 0 4px rgba(255,255,255,.5),
                            0 0 6px rgba(255,255,255,.3),
                            0 0 10px ${accentColor}aa,
                            0 0 14px ${accentColor}88,
                            0 0 18px ${accentColor}44
                        `
                    }}>
                    My Musical Journey
                </h3>
                <div className="max-w-5xl mx-auto text-center leading-relaxed text-lg grid md:grid-cols-3 gap-6 items-center">
                    {/* Left Image */}
                    <div className="order-2 md:order-1">
                        <img 
                            src={imageAssets.music.percussion} 
                            alt="Playing percussion" 
                            className="rounded-lg shadow-2xl w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    
                    {/* Center Text */}
                    <div className="order-1 md:order-2" style={{
                        color: '#fff',
                        textShadow: `0 0 10px ${accentColor}44`
                    }}>
                        <p className="mb-4">Music is a universal language that connects souls. My journey began with the primal beat of the drums and expanded into orchestral percussion and the rich traditions of Middle Eastern instruments.</p>
                        <p>Each performance is a story, each rhythm a heartbeat.</p>
                    </div>
                    
                    {/* Right Image */}
                    <div className="order-3">
                        <img 
                            src={imageAssets.music.orchestra} 
                            alt="Orchestra performance" 
                            className="rounded-lg shadow-2xl w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </FadeIn>

            <FadeIn className="mb-16">
                <h3 className="text-4xl font-bold text-center mb-12" 
                    style={{ 
                        color: '#fff',
                        textShadow: `
                            0 0 2px rgba(255,255,255,.7),
                            0 0 4px rgba(255,255,255,.5),
                            0 0 6px rgba(255,255,255,.3),
                            0 0 10px ${accentColor}aa,
                            0 0 14px ${accentColor}88,
                            0 0 18px ${accentColor}44
                        `
                    }}>
                    Bands & Orchestras
                </h3>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-gray-300">
                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 shadow-2xl">
                        <ul className="space-y-6">
                            {displayedBands.map((band, index) => (
                                <li key={index} className="pl-4 transition-all duration-300 hover:bg-white/25 py-2 rounded" 
                                    style={{ 
                                        borderLeft: `4px solid ${accentColor}`,
                                        textShadow: `0 0 10px ${accentColor}44`
                                    }}>
                                    <p className="text-xl font-bold text-white" style={{
                                        textShadow: `
                                            0 0 2px rgba(255,255,255,.7),
                                            0 0 4px ${accentColor}aa,
                                            0 0 6px ${accentColor}88
                                        `
                                    }}>{band.name}</p>
                                    <p className="text-lg" style={{ color: '#fff' }}>{band.role}</p>
                                    <div className="flex items-center text-sm mt-1" style={{ color: '#fff' }}>
                                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{band.location}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {bandsAndOrchestras.length > 3 && (
                            <button
                                onClick={() => setShowAllBands(!showAllBands)}
                                className="mt-6 font-semibold hover:text-white transition-colors duration-300 flex items-center group"
                                style={{ color: accentColor }}
                                aria-expanded={showAllBands}
                            >
                                <span>{showAllBands ? 'Show Less' : 'Show More'}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform duration-300 ${showAllBands ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        )}
                    </div>
                    <div className="flex items-start">
                        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 shadow-2xl w-full">
                            <img 
                                src={imageAssets.music.orchestra} 
                                alt="Performing with an orchestra" 
                                className="rounded-lg shadow-lg w-full object-cover aspect-4/3"
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>

            <div>
                <FadeIn>
                    <h3 className="text-4xl font-bold text-center mb-12" 
                        style={{ 
                            color: '#fff',
                            textShadow: `
                                0 0 2px rgba(255,255,255,.7),
                                0 0 4px rgba(255,255,255,.5),
                                0 0 6px rgba(255,255,255,.3),
                                0 0 10px ${accentColor}aa,
                                0 0 14px ${accentColor}88,
                                0 0 18px ${accentColor}44
                            `
                        }}>
                        Music Lessons
                    </h3>
                </FadeIn>
                <div className="max-w-5xl mx-auto">
                    <FadeInStagger className="grid md:grid-cols-3 gap-8 text-center text-gray-300">
                        <div>
                            <h4 className="text-2xl font-bold mb-2" 
                                style={{ 
                                    color: '#fff',
                                    textShadow: `
                                        0 0 2px rgba(255,255,255,.7),
                                        0 0 4px rgba(255,255,255,.5),
                                        0 0 6px rgba(255,255,255,.3),
                                        0 0 10px ${accentColor}aa,
                                        0 0 14px ${accentColor}88,
                                        0 0 18px ${accentColor}44
                                    `
                                }}>
                                Drums
                            </h4>
                            <p>All levels, from beginner grooves to advanced techniques.</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-2" 
                                style={{ 
                                    color: '#fff',
                                    textShadow: `
                                        0 0 2px rgba(255,255,255,.7),
                                        0 0 4px rgba(255,255,255,.5),
                                        0 0 6px rgba(255,255,255,.3),
                                        0 0 10px ${accentColor}aa,
                                        0 0 14px ${accentColor}88,
                                        0 0 18px ${accentColor}44
                                    `
                                }}>
                                Guitar
                            </h4>
                            <p>Intermediate players looking to refine their skills.</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-2" 
                                style={{ 
                                    color: '#fff',
                                    textShadow: `
                                        0 0 2px rgba(255,255,255,.7),
                                        0 0 4px rgba(255,255,255,.5),
                                        0 0 6px rgba(255,255,255,.3),
                                        0 0 10px ${accentColor}aa,
                                        0 0 14px ${accentColor}88,
                                        0 0 18px ${accentColor}44
                                    `
                                }}>
                                Piano
                            </h4>
                            <p>Beginner lessons to build a strong musical foundation.</p>
                        </div>
                    </FadeInStagger>
                    <FadeIn className="text-center mt-10">
                        <button
                          onClick={handleContactClick}
                          className="inline-block font-bold py-3 px-8 rounded-full transform transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
                          style={{ 
                              backgroundColor: 'rgba(0,0,0,0.3)',
                              color: '#fff',
                              textShadow: `
                                  0 0 2px rgba(255,255,255,.7),
                                  0 0 4px rgba(255,255,255,.5),
                                  0 0 6px rgba(255,255,255,.3),
                                  0 0 10px ${accentColor}aa,
                                  0 0 14px ${accentColor}88,
                                  0 0 18px ${accentColor}44
                              `,
                              boxShadow: `0 0 10px ${accentColor}88, 0 0 20px ${accentColor}44`
                          }}
                        >
                            For more info about lessons, contact me
                        </button>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
};

export default MusicSection;