import React from 'react';

interface ShowMoreButtonProps {
    expanded: boolean;
    onToggle: () => void;
    color: string;
    className?: string;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ expanded, onToggle, color, className = '' }) => (
    <button
        type="button"
        onClick={onToggle}
        className={`font-semibold hover:text-white transition-colors duration-300 flex items-center ${className}`}
        style={{ color }}
        aria-expanded={expanded}
    >
        <span>{expanded ? 'Show Less' : 'Show More'}</span>
        <svg className={`h-5 w-5 ml-1 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </button>
);

export default ShowMoreButton;
