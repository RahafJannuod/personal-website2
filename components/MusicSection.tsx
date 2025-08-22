import React from 'react';

const MusicSection: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className={`py-20 ${className}`}>
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">{title}</h2>
            {children}
        </div>
    </div>
);

export default MusicSection;
