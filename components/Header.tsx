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
        <header className={`sticky top-0 z-50 transition-all duration-300 transform-gpu ${isScrolled || isMenuOpen ? 'shadow-md bg-[#053149]/80 backdrop-blur-md' : 'bg-transparent'}`}>
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
                        <button onClick={toggleMenu} aria-label="Toggle menu" className="z-50 relative">
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
                className={`md:hidden fixed inset-0 bg-[#053149]/95 backdrop-blur-md pt-24 transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <nav className="flex flex-col items-center space-y-8">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className={`text-2xl transition-colors duration-300 ${activeSection === link.href.substring(1) ? `${mobileActiveColor} font-bold` : 'text-gray-300'}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;