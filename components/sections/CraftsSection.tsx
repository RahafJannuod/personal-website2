import React, { useState, useEffect } from 'react';
import Section from '../Section';
import GalleryItem from '../GalleryItem';
import ProjectModal from '../ProjectModal';
import { FadeIn, FadeInStagger } from '../AnimatedHeader';
import { craftProjects, CraftProject } from '../../data/content';
import { themeColors, imageAssets } from '../../data/config';

const CraftsSection: React.FC = () => {
    const accentColor = themeColors.accent.crafts;
    const [selectedProject, setSelectedProject] = useState<CraftProject | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Debug logging
    useEffect(() => {
        console.log('CraftsSection loaded');
        console.log('craftProjects:', craftProjects);
        console.log('Number of projects:', craftProjects.length);
        craftProjects.forEach((project, index) => {
            console.log(`Project ${index + 1}:`, project.title, 'Image:', project.mainImage);
        });
    }, []);

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
                    
                    {/* Debug info */}
                    <div className="text-center mb-4 text-white/60">
                        <p>Debug: {craftProjects.length} projects loaded</p>
                    </div>
                    
                    <FadeInStagger className="project-gallery flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
                        {craftProjects.map((project, index) => (
                            <div key={project.id} className="flex-shrink-0 w-64 h-[320px] md:w-80 md:h-[400px] snap-center">
                                <GalleryItem 
                                    project={project} 
                                    accentColor={accentColor} 
                                    onClick={handleProjectClick}
                                />
                            </div>
                        ))}
                    </FadeInStagger>
                    
                    {/* Gallery Instructions */}
                    <FadeIn className="mt-8 text-center">
                        <p className="text-white/80 text-lg">
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