import React, { useState } from 'react';

// Components
import Section from '../Section';
import GalleryItem from '../GalleryItem';
import ProjectModal from '../ProjectModal';
import { FadeIn, FadeInStagger } from '../AnimatedHeader';

// Data and Configuration
import { craftProjects, type CraftProject } from '../../data/content';
import { themeColors, imageAssets } from '../../data/config';

// Utilities
import { createGlowTextStyle, createLightGlowTextStyle } from '../../utils/styles';

// Component Styles
const scrollbarStyles = (accentColor: string) => `
  .project-gallery::-webkit-scrollbar { height: 8px; }
  .project-gallery::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
  .project-gallery::-webkit-scrollbar-thumb { background: ${accentColor}; border-radius: 10px; }
  .project-gallery::-webkit-scrollbar-thumb:hover { filter: brightness(1.2); }
  .project-gallery { scrollbar-width: thin; scrollbar-color: ${accentColor} rgba(255, 255, 255, 0.1); }
`;

const CraftsSection: React.FC = () => {
    // Theme and State
    const accentColor = themeColors.accent.crafts;
    const [selectedProject, setSelectedProject] = useState<CraftProject | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Event Handlers
    const handleProjectClick = (project: CraftProject) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <Section
                id="crafts"
                backgroundImageUrl={imageAssets.crafts.background}
                title="Handmade Artist"
                subtitle="My passion for handmade art is a journey of constant discovery. It began with simple threads, evolving into a vibrant exploration of textures, colors, and forms. Each piece tells a story—of inspiration found in nature, of joy in creation, and of the beauty in imperfection."
                accentColor={accentColor}
            >
                <style>{scrollbarStyles(accentColor)}</style>
                <div>
                    <FadeIn>
                        <h3 className="text-4xl font-bold text-center mb-12" 
                            style={createGlowTextStyle(accentColor)}>
                            Projects Gallery
                        </h3>
                    </FadeIn>
                    <FadeInStagger className="project-gallery flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
                        {craftProjects.map((project) => (
                            <div 
                                key={project.id} 
                                className="flex-shrink-0 w-80 h-[400px] snap-center"
                            >
                                <GalleryItem 
                                    project={project}
                                    onClick={handleProjectClick}
                                />
                            </div>
                        ))}
                    </FadeInStagger>
                    
                    {/* Gallery Instructions */}
                    <FadeIn className="mt-8 text-center">
                        <p className="text-lg"
                            style={createLightGlowTextStyle(accentColor)}>
                            💡 Click on any project to explore more photos and details
                        </p>
                    </FadeIn>
                </div>
            </Section>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default CraftsSection;