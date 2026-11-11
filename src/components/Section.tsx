import React from 'react';
import { FadeIn } from './FadeIn';
import SectionBackground from './SectionBackground';
import { createGlowTextStyle, createLightGlowTextStyle } from '../utils/styles';

interface SectionProps {
    id: string;
    backgroundImageUrl: string;
    title: string;
    subtitle: string;
    accentColor: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, backgroundImageUrl, title, subtitle, accentColor, children }) => (
    // Each section overlaps the bottom padding of the one above, and their backgrounds cross-fade over that overlap
    <section id={id} className="relative -mt-16 md:-mt-24 text-white overflow-hidden">
        <SectionBackground src={backgroundImageUrl} />

        <div className="relative w-full px-4 py-16 md:py-24 z-10">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-12">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <h2
                                className="text-5xl md:text-6xl font-bold mb-6"
                                style={createGlowTextStyle(accentColor)}
                            >
                                {title}
                            </h2>
                            <p
                                className="text-lg leading-relaxed bg-black/20 p-4 rounded-lg"
                                style={createLightGlowTextStyle(accentColor)}
                            >
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
