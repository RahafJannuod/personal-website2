import React, { useRef, useState, useEffect, createContext, useContext } from 'react';

const useIntersectionObserver = (elementRef: React.RefObject<HTMLElement>, {
    threshold = 0,
    root = null,
    rootMargin = '0%'
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!elementRef.current) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, root, rootMargin }
        );

        const currentElement = elementRef.current;
        observer.observe(currentElement);

        return () => {
            if(currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [elementRef, threshold, root, rootMargin]);

    return isVisible;
};

const FadeInStaggerContext = createContext(false);

const useIsStaggerVisible = () => {
    return useContext(FadeInStaggerContext);
}

export const FadeInStagger: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref, { rootMargin: '0px 0px -150px 0px' });
    
    return (
        <FadeInStaggerContext.Provider value={isVisible}>
            <div ref={ref} className={className}>
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
        </FadeInStaggerContext.Provider>
    );
};

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isStaggerVisible = useIsStaggerVisible();
    const isVisible = useIntersectionObserver(ref, { rootMargin: '0px 0px -100px 0px' });
    const shouldBeVisible = isStaggerVisible || isVisible;

    return (
        <div
            ref={ref}
            className={`${className || ''} transition-all duration-700 ease-out ${shouldBeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {children}
        </div>
    );
};
