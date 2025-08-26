import React, { useState, useEffect, useRef } from 'react';
import { navLinks } from '../data/content';
import { themeColors } from '../data/config';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Intersection Observer for active section highlighting
        observer.current = new IntersectionObserver((entries) => {
            const intersectingEntry = entries.find(entry => entry.isIntersecting);
            if (intersectingEntry) {
                setActiveSection(intersectingEntry.target.id);
            }
        }, {
            rootMargin: '-40% 0px -60% 0px', // Triggers when the section is in the middle of the viewport
            threshold: 0,
        });

        const currentObserver = observer.current;

        navLinks.forEach(link => {
            const element = document.querySelector(link.href);
            if (element) {
                currentObserver.observe(element);
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (currentObserver) {
                currentObserver.disconnect();
            }
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };
    
    const navHoverAfterBg = `after:bg-[${themeColors.accent.navHover}]`;
    const mobileActiveColor = `text-[${themeColors.accent.navHover}]`;

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 transform-gpu shadow-md bg-[#B9C0DA]/50 backdrop-blur-sm`}>
            <div className="container mx-auto px-6">
                <nav className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
                    <a href="#home" className="text-2xl font-bold font-script animate-text-glow">
                        Rahaf Jannuod
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`group relative text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 ${navHoverAfterBg} after:transition-all after:duration-300 ${activeSection === link.href.substring(1) ? 'text-white after:w-full' : 'hover:after:w-full'}`}
                            >
                                <span className="relative inline-block overflow-hidden h-5">
                                    <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                                        {link.label}
                                    </span>
                                    <span className="absolute left-0 inline-block text-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                                        {link.label}
                                    </span>
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} aria-label="Toggle menu" className="z-[70] relative">
                            <div className="space-y-2">
                                <span className={`block w-8 h-0.5 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                                <span className={`block w-8 h-0.5 bg-white transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-8 h-0.5 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-md transition-all duration-500 ease-in-out z-40 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <div className="flex items-center justify-center min-h-screen px-6">
                    <nav className="w-full max-w-sm">
                        <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className={`group relative text-xl font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 ${activeSection === link.href.substring(1) ? 'text-white bg-white/20 font-bold' : 'text-gray-100 hover:text-white'}`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="relative z-10">{link.label}</span>
                                            <svg 
                                                className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        {activeSection === link.href.substring(1) && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl" />
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;