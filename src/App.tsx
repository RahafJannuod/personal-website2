import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import TechSection from './components/sections/TechSection';
import MusicSection from './components/sections/MusicSection';
import CraftsSection from './components/sections/CraftsSection';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <TechSection />
                <MusicSection />
                <CraftsSection />
            </main>
            <Footer />
        </>
    );
};

export default App;
