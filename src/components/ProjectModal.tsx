import React, { useState, useEffect } from 'react';
import { CraftProject } from '../data/content';

interface ProjectModalProps {
    project: CraftProject | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    useEffect(() => {
        if (project) {
            setCurrentPhotoIndex(0);
        }
    }, [project]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    const nextPhoto = () => {
        setCurrentPhotoIndex((prev) => 
            prev === project.photos.length - 1 ? 0 : prev + 1
        );
    };

    const prevPhoto = () => {
        setCurrentPhotoIndex((prev) => 
            prev === 0 ? project.photos.length - 1 : prev - 1
        );
    };

    const goToPhoto = (index: number) => {
        setCurrentPhotoIndex(index);
    };

    return (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-6xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 border-b border-gray-600">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                            <p className="text-gray-300 capitalize">{project.category}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-600 rounded-full transition-colors duration-200 text-gray-300 hover:text-white"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-6">
                    {/* Description */}
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        {project.description}
                    </p>

                    {/* Responsive Layout */}
                    <div className="flex flex-col lg:flex-row gap-6 mb-6">
                        {/* Main Photo Display */}
                        <div className="flex-1">
                            <div className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-600 h-64 sm:h-80 lg:h-[500px]">
                                <img
                                    src={project.photos[currentPhotoIndex]}
                                    alt={`${project.title} - Photo ${currentPhotoIndex + 1}`}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/images/placeholder.jpg';
                                    }}
                                />
                                
                                {/* Navigation Arrows */}
                                {project.photos.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevPhoto}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-95 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-gray-600"
                                        >
                                            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextPhoto}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-95 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 border border-gray-600"
                                        >
                                            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>
                            
                            {/* Photo Counter */}
                            {project.photos.length > 1 && (
                                <div className="text-center mt-4">
                                    <span className="text-gray-400 bg-gray-800 px-4 py-2 rounded-full border border-gray-600">
                                        Photo {currentPhotoIndex + 1} of {project.photos.length}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Thumbnail Grid */}
                        {project.photos.length > 1 && (
                            <div className="w-full lg:w-64">
                                <h3 className="text-lg font-semibold text-white mb-4">All Photos</h3>
                                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-2 gap-3 max-h-40 lg:max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                                    {project.photos.map((photo, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToPhoto(index)}
                                            className={`transition-all duration-200 ${
                                                index === currentPhotoIndex
                                                    ? 'ring-4 ring-pink-500 scale-105'
                                                    : 'hover:scale-105'
                                            }`}
                                        >
                                            <img
                                                src={photo}
                                                alt={`${project.title} - Thumbnail ${index + 1}`}
                                                className="w-full h-16 lg:h-24 object-cover rounded-lg shadow-md border border-gray-600"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = '/images/placeholder.jpg';
                                                }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 border-t border-gray-600">
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-400">
                            Click outside or press ESC to close
                        </div>
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 font-medium shadow-lg"
                        >
                            Close Gallery
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal; 