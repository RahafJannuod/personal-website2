import React, { useEffect, useRef, useState } from 'react';
import { imageAssets } from '../data/config';
import { socialLinks } from '../data/content';
import SectionBackground from './SectionBackground';

const GLOW_DURATION_MS = 3500;

// After a link to #contact is clicked, wait until the icons scroll into view, then make them glow
const useGlowOnContactLink = (iconsRef: React.RefObject<HTMLElement>) => {
    const [isGlowing, setIsGlowing] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver | undefined;
        let timer: number | undefined;

        const handleClick = (e: MouseEvent) => {
            const link = (e.target as Element).closest?.('a[href="#contact"]');
            if (!link || !iconsRef.current) return;

            observer?.disconnect();
            observer = new IntersectionObserver(([entry]) => {
                if (!entry.isIntersecting) return;
                observer?.disconnect();
                setIsGlowing(false);
                // Restart on the next frame, so a second click glows again
                requestAnimationFrame(() => setIsGlowing(true));
                window.clearTimeout(timer);
                timer = window.setTimeout(() => setIsGlowing(false), GLOW_DURATION_MS);
            }, { threshold: 1 });
            observer.observe(iconsRef.current);
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
            observer?.disconnect();
            window.clearTimeout(timer);
        };
    }, [iconsRef]);

    return isGlowing;
};

const EMAIL_BUBBLE_MS = 4000;

// Clicking the email icon still opens the mail app, and also copies the address and shows it,
// for visitors who have no mail app set up
const useEmailBubble = () => {
    const [email, setEmail] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const timer = useRef<number>();

    useEffect(() => () => window.clearTimeout(timer.current), []);

    const show = (address: string) => {
        setEmail(address);
        setCopied(false);
        navigator.clipboard?.writeText(address).then(() => setCopied(true), () => setCopied(false));
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setEmail(null), EMAIL_BUBBLE_MS);
    };

    return { email, copied, show };
};

const Footer: React.FC = () => {
    const iconsRef = useRef<HTMLDivElement>(null);
    const isGlowing = useGlowOnContactLink(iconsRef);
    const emailBubble = useEmailBubble();

    return (
        <footer
            id="contact"
            className="relative -mt-16 md:-mt-24 pt-20 md:pt-28 pb-4 text-white overflow-hidden"
        >
            <SectionBackground src={imageAssets.footer.background} fadeBottom={false}>
                {/* Frosted layer, fading in over the bottom of the section above */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md [mask-image:linear-gradient(to_bottom,transparent,black_4rem)] md:[mask-image:linear-gradient(to_bottom,transparent,black_6rem)]" aria-hidden="true"></div>
            </SectionBackground>

            <div className="relative container mx-auto px-6 text-center">
                <div ref={iconsRef} className="relative flex justify-center items-center space-x-6 mb-6">
                    {/* Bubble with the email address, centered above the icons */}
                    <div
                        role="status"
                        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap rounded-lg bg-black/80 px-4 py-2 text-sm shadow-lg transition-opacity duration-300 ${emailBubble.email ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        {emailBubble.email && (
                            <>
                                <span className="select-all font-sans">{emailBubble.email}</span>
                                {emailBubble.copied && <span className="ml-2 text-[#F25F67]">Copied!</span>}
                            </>
                        )}
                    </div>

                    {socialLinks.map((link, index) => {
                        const isEmail = link.href.startsWith('mailto:');
                        return (
                        <a
                            key={link.label}
                            href={link.href}
                            target={isEmail ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            onClick={isEmail ? () => emailBubble.show(link.href.replace('mailto:', '')) : undefined}
                            className={`${link.hoverClass} transition-colors ${isGlowing ? 'motion-safe:animate-icon-glow' : ''}`}
                            // A short delay per icon makes the glow travel left to right
                            style={isGlowing ? { animationDelay: `${index * 120}ms` } : undefined}
                        >
                            <svg className={link.iconSize} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d={link.iconPath} />
                            </svg>
                        </a>
                        );
                    })}
                </div>
                <div className="flex justify-center items-center space-x-2 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Berlin</span>
                </div>
                <p>&copy; {new Date().getFullYear()} Rahaf Jannuod. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
