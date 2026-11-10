import React, { useState, useEffect } from 'react';
import { CraftProject } from '../data/content';
import { imageAssets, themeColors } from '../data/config';
import { createGlowTextStyle, createLightGlowTextStyle } from '../utils/styles';
import SectionBackground from './SectionBackground';

const accentColor = themeColors.accent.crafts;

interface ProjectModalProps {
    project: CraftProject;
    onClose: () => void;
}

const hideBrokenImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.visibility = 'hidden';
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const photoCount = project.photos.length;

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    const nextPhoto = () => setCurrentPhotoIndex(index => (index + 1) % photoCount);
    const prevPhoto = () => setCurrentPhotoIndex(index => (index - 1 + photoCount) % photoCount);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black p-4"
        >
            {/* The same darkened photo and vignette as the page sections; clicks on it close the gallery */}
            <div className="absolute inset-0 pointer-events-none">
                <SectionBackground src={imageAssets.crafts.background} fadeTop={false} fadeBottom={false} />
            </div>

            {/* Fills the screen height so nothing scrolls except the thumbnail strip */}
            <div className="relative w-full max-w-6xl h-full max-h-[860px] flex flex-col bg-white/20 backdrop-blur-md rounded-xl shadow-2xl text-white"
                style={createLightGlowTextStyle(accentColor)}
            >
                {/* Header: title, description and close button */}
                <div className="flex items-start justify-between gap-4 px-4 py-3 md:px-6 md:py-4 border-b border-white/20">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold" style={createGlowTextStyle(accentColor)}>{project.title}</h2>
                        <p className="text-sm md:text-base leading-snug mt-1">{project.description}</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close gallery"
                        className="p-2 flex-shrink-0 hover:bg-black/30 rounded-full transition-colors duration-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Big photo, with thumbnails beside it on wide screens and under it on small ones */}
                <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-4 p-4 md:p-6">
                    <div className="relative flex-1 min-h-0 overflow-hidden rounded-xl bg-black/25">
                        <img
                            key={project.photos[currentPhotoIndex]}
                            src={project.photos[currentPhotoIndex]}
                            alt={`${project.title} - Photo ${currentPhotoIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-contain"
                            onError={hideBrokenImage}
                        />

                        {photoCount > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={prevPhoto}
                                    aria-label="Previous photo"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-white/30"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    onClick={nextPhoto}
                                    aria-label="Next photo"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-white/30"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-sm">
                                    {currentPhotoIndex + 1} / {photoCount}
                                </span>
                            </>
                        )}
                    </div>

                    {photoCount > 1 && (
                        <div className="flex-shrink-0 lg:w-56 flex gap-3 lg:grid lg:grid-cols-2 lg:content-start overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto p-1">
                            {project.photos.map((photo, index) => (
                                <button
                                    type="button"
                                    key={photo}
                                    onClick={() => setCurrentPhotoIndex(index)}
                                    aria-label={`Show photo ${index + 1}`}
                                    aria-current={index === currentPhotoIndex}
                                    style={index === currentPhotoIndex ? { '--tw-ring-color': accentColor } as React.CSSProperties : undefined}
                                    className={`flex-shrink-0 rounded-lg transition-transform duration-200 ${index === currentPhotoIndex ? 'ring-4' : 'hover:scale-105'}`}
                                >
                                    <img
                                        src={photo}
                                        alt=""
                                        loading="lazy"
                                        className="w-20 h-16 lg:w-full lg:h-24 object-cover rounded-lg shadow-md"
                                        onError={hideBrokenImage}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
