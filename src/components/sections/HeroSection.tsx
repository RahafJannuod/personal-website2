import React from 'react';
import { imageAssets, themeColors } from '../../data/config';
import { musicLessons } from '../../data/content';
import { createCrispTextStyle } from '../../utils/styles';
import SectionBackground from '../SectionBackground';

const roles = [
    { label: 'QA Specialist', href: '#tech', color: themeColors.accent.tech },
    { label: 'Musician', href: '#music', color: themeColors.accent.music },
    { label: 'Handmade Artist', href: '#crafts', color: themeColors.accent.crafts },
];

const HeroSection: React.FC = () => {
    const accentColor = themeColors.accent.music;
    const crispText = createCrispTextStyle(accentColor);

    return (
        // -mt-16 pulls the background up behind the 64px menu bar
        <section id="home" className="relative -mt-16 text-white overflow-hidden">
            <SectionBackground src={imageAssets.hero.background} className="object-[center_42%]" fadeTop={false} />

            <div className="relative w-full px-4 pt-[88px] pb-16 md:pb-24 z-10">
                {/* A little wider than the max-w-5xl card of the other sections */}
                <div className="max-w-6xl mx-auto bg-white/20 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden grid md:grid-cols-2">
                    {/* Portrait, filling the card to its edges */}
                    <div className="relative h-[50vh] min-h-[340px] md:h-auto md:min-h-[min(600px,calc(100vh-112px))]">
                        <img
                            src={imageAssets.hero.portrait}
                            alt="Rahaf Jannuod"
                            className="absolute inset-0 w-full h-full object-cover object-[center_65%] [mask-image:linear-gradient(to_bottom,black_calc(100%-3rem),transparent)] md:[mask-image:linear-gradient(to_right,black_calc(100%-4rem),transparent)]"
                        />
                    </div>

                    {/* Name, introduction and music lessons */}
                    <div className="p-6 lg:p-8 text-center md:text-left self-center">
                        <h1
                            className="text-5xl lg:text-6xl leading-tight font-heading"
                            style={crispText}
                        >
                            Rahaf Jannuod
                        </h1>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                            {roles.map(role => (
                                <a
                                    key={role.href}
                                    href={role.href}
                                    className="px-3 py-1 rounded-full text-sm lg:text-base font-bold border transition-transform duration-200 hover:scale-105"
                                    style={{ ...crispText, backgroundColor: `${role.color}55`, borderColor: role.color }}
                                >
                                    {role.label}
                                </a>
                            ))}
                        </div>
                        <div
                            className="bg-black/25 rounded-lg p-5 mt-4 text-base lg:text-lg"
                            style={crispText}
                        >
                            <p>Blending art, music, craft, and technology with elegance, energy, and intelligence.</p>
                            <p className="mt-3">From testing software at SoundCloud to playing on stage and crafting by hand, this is where all my worlds meet.</p>
                        </div>

                        {/* Music lessons */}
                        <div className="bg-black/25 rounded-lg p-4 mt-4 text-center" style={crispText}>
                            <h2 className="text-2xl font-bold mb-3">
                                Music Lessons
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-3">
                                {musicLessons.map(lesson => (
                                    <div key={lesson.instrument}>
                                        <h3 className="text-lg font-bold">{lesson.instrument}</h3>
                                        <p className="text-sm leading-snug">{lesson.description}</p>
                                    </div>
                                ))}
                            </div>
                            <a
                                href="#contact"
                                className="inline-block mt-4 text-sm font-bold py-2 px-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                style={{
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    boxShadow: `0 0 10px ${accentColor}88, 0 0 20px ${accentColor}44`
                                }}
                            >
                                For more info about lessons, contact me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
