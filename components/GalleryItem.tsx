import React from 'react';
import { CraftProject } from '../data/content';

interface GalleryItemProps {
    project: CraftProject;
    accentColor: string;
    onClick: (project: CraftProject) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ project, accentColor, onClick }) => {
    // Debug logging
    console.log('GalleryItem rendering:', project.title, 'Image:', project.mainImage);
    
    return (
        <div 
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full h-full"
            onClick={() => onClick(project)}
        >
            <img 
                src={project.mainImage} 
                alt={project.title} 
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ minHeight: '100%', minWidth: '100%' }}
                onLoad={() => console.log('Image loaded successfully:', project.mainImage)}
                onError={(e) => {
                    console.error('Image failed to load:', project.mainImage, e);
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-sm mt-1" style={{ color: accentColor }}>{project.category}</p>
                    <div className="flex items-center mt-2 text-white/80 text-xs">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{project.photos.length} photo{project.photos.length !== 1 ? 's' : ''}</span>
                    </div>
                </div>
            </div>
            
            {/* Click indicator */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </div>
        </div>
    );
};

export default GalleryItem;