import React from 'react';

interface SectionBackgroundProps {
    src: string;
    /** Extra classes for the photo, e.g. its crop position or fade overrides */
    className?: string;
    /** Skip the fade at the top (first section) or bottom (footer) of the page */
    fadeTop?: boolean;
    fadeBottom?: boolean;
    /** Layers drawn between the photo and the vignette */
    children?: React.ReactNode;
}

// The darkened background photo with vignette corners used by every section.
// Both layers fade out at their edges so neighbouring sections blend together.
const SectionBackground: React.FC<SectionBackgroundProps> = ({ src, className = '', fadeTop = true, fadeBottom = true, children }) => {
    const fadeOverrides = `${fadeTop ? '' : '[--fade-top:0px]'} ${fadeBottom ? '' : '[--fade-bottom:0px]'}`;

    return (
        <>
            <img
                src={src}
                alt=""
                aria-hidden="true"
                className={`section-bg ${fadeOverrides} absolute inset-0 w-full h-full object-cover ${className}`}
            />
            {children}
            <div className={`section-vignette ${fadeOverrides} absolute inset-0`} aria-hidden="true"></div>
        </>
    );
};

export default SectionBackground;
