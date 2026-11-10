import React, { useState } from 'react';
import Section from '../Section';
import { FadeIn } from '../FadeIn';
import ShowMoreButton from '../ShowMoreButton';
import { bandsAndOrchestras } from '../../data/content';
import { themeColors, imageAssets } from '../../data/config';
import { createAccentGlowTextStyle, createGlowTextStyle, createLightGlowTextStyle } from '../../utils/styles';

// objectPosition keeps the performer's face in frame when the photo is cropped
const performanceImages = [
    { src: imageAssets.music.performance, objectPosition: 'center center' },
    { src: imageAssets.music.performance2, objectPosition: 'center 10%' },
    { src: imageAssets.music.performance3, objectPosition: '70% 20%' },
    { src: imageAssets.music.performance4, objectPosition: 'center 15%' },
];

// The two photos beside the intro text
const introImages = [
    { src: imageAssets.music.percussion, alt: 'Playing percussion', className: 'order-2 md:order-1' },
    { src: imageAssets.music.orchestra, alt: 'Orchestra performance', className: 'order-3' },
];

const initialBandCount = 3;

const readableTextShadow ={ textShadow: '0 0 6px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)' };

const MusicSection: React.FC = () => {
    const [showAllBands, setShowAllBands] = useState(false);

    const displayedBands = showAllBands ? bandsAndOrchestras : bandsAndOrchestras.slice(0, initialBandCount);
    const displayedImages = showAllBands ? performanceImages : performanceImages.slice(0, 1);

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
                <div className="max-w-5xl mx-auto text-center leading-relaxed text-lg grid md:grid-cols-3 gap-6 items-center">
                    {/* Text in the middle on desktop, first on phones */}
                    <div className="order-1 md:order-2" style={createLightGlowTextStyle(accentColor)}>
                        <p className="mb-4">Music is a universal language that connects souls. My journey began with the primal beat of the drums and expanded into orchestral percussion and the rich traditions of Middle Eastern instruments.</p>
                        <p>Each performance is a story, each rhythm a heartbeat.</p>
                    </div>

                    {introImages.map(image => (
                        <div key={image.src} className={image.className}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="rounded-lg shadow-2xl w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </FadeIn>

            <FadeIn>
                <h3 className="text-4xl font-bold text-center mb-12" style={createGlowTextStyle(accentColor)}>
                    Bands & Orchestras
                </h3>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-white" style={readableTextShadow}>
                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 shadow-2xl flex flex-col">
                        <ul className="space-y-4 flex-grow">
                            {displayedBands.map(band => (
                                <li key={`${band.name}-${band.role}`} className="pl-4 transition-all duration-300 hover:bg-white/25 py-2 rounded"
                                    style={{
                                        borderLeft: `4px solid ${accentColor}`,
                                        ...createLightGlowTextStyle(accentColor)
                                    }}>
                                    <p className="text-lg font-bold text-white" style={createAccentGlowTextStyle(accentColor)}>{band.name}</p>
                                    <p className="text-base text-white">{band.role}</p>
                                    <div className="flex items-center text-sm text-white">
                                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{band.location}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {bandsAndOrchestras.length > initialBandCount && (
                            <ShowMoreButton
                                expanded={showAllBands}
                                onToggle={() => setShowAllBands(!showAllBands)}
                                color={accentColor}
                                className="mt-4"
                            />
                        )}
                    </div>
                    <div className="flex items-start h-full">
                        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 shadow-2xl w-full h-full flex flex-col gap-24">
                            {displayedImages.map(({ src, objectPosition }, index) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt={`Musical performance ${index + 1}`}
                                    loading="lazy"
                                    className="rounded-lg shadow-lg w-full object-cover"
                                    style={{ minHeight: '240px', maxHeight: '320px', objectPosition }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
};

export default MusicSection;
