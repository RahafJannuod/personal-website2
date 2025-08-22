import React from 'react';

const GalleryItem: React.FC<{ imageUrl: string; title: string; category: string; accentColor: string; }> = ({ imageUrl, title, category, accentColor }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="text-white text-xl font-bold">{title}</h3>
                <p className="text-sm mt-1" style={{ color: accentColor }}>{category}</p>
            </div>
        </div>
    </div>
);

export default GalleryItem;