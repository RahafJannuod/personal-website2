import React, { useRef, useState, useEffect } from 'react';

const useRevealOnScroll = (elementRef: React.RefObject<HTMLElement>, rootMargin: string) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [elementRef, rootMargin]);

    return isVisible;
};

interface FadeInStaggerProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const FadeInStagger: React.FC<FadeInStaggerProps> = ({ children, className, style }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useRevealOnScroll(ref, '0px 0px -150px 0px');

    return (
        <div ref={ref} className={className} style={style}>
            {React.Children.map(children, (child, i) => (
                <div
                    className="transition-all duration-500 ease-in-out"
                    style={{
                        transitionDelay: `${isVisible ? i * 100 : 0}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useRevealOnScroll(ref, '0px 0px -100px 0px');

    return (
        <div
            ref={ref}
            className={`${className || ''} transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {children}
        </div>
    );
};
