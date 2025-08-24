import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import TechSection from '../components/sections/TechSection';
import MusicSection from '../components/sections/MusicSection';
import CraftsSection from '../components/sections/CraftsSection';

const LandingPage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <TechSection />
            <MusicSection />
            <CraftsSection />
        </>
    );
};

export default LandingPage;