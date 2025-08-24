import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
    return (
        <div className="bg-[#053149]">
            <Header />
            <main>
                <LandingPage />
            </main>
            <Footer />
        </div>
    );
};

export default App;