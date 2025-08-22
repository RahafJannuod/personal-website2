import React from 'react';
import Section from '../Section';
import GalleryItem from '../GalleryItem';
import { FadeIn, FadeInStagger } from '../AnimatedHeader';
import { craftProjects } from '../../data/content';
import { themeColors, imageAssets } from '../../data/config';

const CraftsSection: React.FC = () => {
    const accentColor = themeColors.accent.crafts;
    return (
        <Section
            id="crafts"
            backgroundImageUrl={imageAssets.crafts.background}
            title="Handmade Artist"
            subtitle="My passion for handmade art is a journey of constant discovery. It began with simple threads, evolving into a vibrant exploration of textures, colors, and forms. Each piece tells a story—of inspiration found in nature, of joy in creation, and of the beauty in imperfection."
            accentColor={accentColor}
        >
            <style>{`
                .project-gallery::-webkit-scrollbar { height: 8px; }
                .project-gallery::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
                .project-gallery::-webkit-scrollbar-thumb { background: ${accentColor}; border-radius: 10px; }
                .project-gallery::-webkit-scrollbar-thumb:hover { filter: brightness(1.2); }
                .project-gallery { scrollbar-width: thin; scrollbar-color: ${accentColor} rgba(255, 255, 255, 0.1); }
            `}</style>
            <div>
                <FadeIn>
                    <h3 className="text-4xl font-bold text-center mb-12" style={{ color: accentColor }}>Project Gallery</h3>
                </FadeIn>
                <FadeInStagger className="project-gallery flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
                    {craftProjects.map((project, index) => (
                        <div key={index} className="flex-shrink-0 w-64 h-[320px] md:w-80 md:h-[400px] snap-center">
                            <GalleryItem {...project} accentColor={accentColor} />
                        </div>
                    ))}
                </FadeInStagger>
            </div>
        </Section>
    );
};

export default CraftsSection;