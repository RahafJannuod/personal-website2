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
            subtitle="Percussionist | Performer | Teacher"
            accentColor={accentColor}
        >
            <FadeIn className="mb-16">
                <h3 className="text-4xl font-bold text-center mb-12" style={{ color: accentColor }}>My Musical Journey</h3>
                <div className="max-w-4xl mx-auto text-center leading-relaxed text-lg grid md:grid-cols-2 gap-10 items-center text-gray-300">
                    <img src={imageAssets.music.percussion} alt="Playing percussion" className="rounded-lg shadow-2xl"/>
                    <div>
                        <p className="mb-4">Music is a universal language that connects souls. My journey began with the primal beat of the drums and expanded into orchestral percussion and the rich traditions of Middle Eastern instruments.</p>
                        <p>Each performance is a story, each rhythm a heartbeat.</p>
                    </div>
                </div>
            </FadeIn>

            <FadeIn className="mb-16">
                <h3 className="text-4xl font-bold text-center mb-12" style={{ color: accentColor }}>Bands & Orchestras</h3>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center text-gray-300">
                    <div>
                        <ul className="space-y-6">
                            {displayedBands.map((band, index) => (
                                <li key={index} className="pl-4 transition-all duration-300 hover:bg-white/5 py-2" style={{ borderLeft: `4px solid ${accentColor}` }}>
                                    <p className="text-xl font-bold text-white">{band.name}</p>
                                    <p className="text-lg text-gray-300">{band.role}</p>
                                    <div className="flex items-center text-sm text-gray-400 mt-1">
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
                    <img src={imageAssets.music.orchestra} alt="Performing with an orchestra" className="rounded-lg shadow-2xl"/>
                </div>
            </FadeIn>

            <div>
                <FadeIn>
                    <h3 className="text-4xl font-bold text-center mb-12" style={{ color: accentColor }}>Music Lessons</h3>
                </FadeIn>
                <div className="max-w-5xl mx-auto">
                    <FadeInStagger className="grid md:grid-cols-3 gap-8 text-center text-gray-300">
                        <div><h4 className="text-2xl font-bold mb-2" style={{ color: accentColor }}>Drums</h4><p>All levels, from beginner grooves to advanced techniques.</p></div>
                        <div><h4 className="text-2xl font-bold mb-2" style={{ color: accentColor }}>Guitar</h4><p>Intermediate players looking to refine their skills.</p></div>
                        <div><h4 className="text-2xl font-bold mb-2" style={{ color: accentColor }}>Piano</h4><p>Beginner lessons to build a strong musical foundation.</p></div>
                    </FadeInStagger>
                    <FadeIn className="text-center mt-10">
                        <button
                          onClick={handleContactClick}
                          className="inline-block text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transform transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                          style={{ backgroundColor: accentColor }}
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