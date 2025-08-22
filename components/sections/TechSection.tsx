import React, { useState } from 'react';
import Section from '../Section';
import SkillBadge from '../SkillBadge';
import { FadeIn, FadeInStagger } from '../AnimatedHeader';
import { techCourses, techSkills } from '../../data/content';
import { themeColors, imageAssets } from '../../data/config';

const TechSection: React.FC = () => {
    const [showAllCourses, setShowAllCourses] = useState(false);

    const initialCourseCount = 4; // 2 rows * 2 cols
    const displayedCourses = showAllCourses ? techCourses : techCourses.slice(0, initialCourseCount);
    
    const accentColor = themeColors.accent.tech;

    return (
        <Section
            id="tech"
            backgroundImageUrl={imageAssets.tech.background}
            title="QA Engineer"
            subtitle="A journey through technology, continuous learning, and future aspirations in AI."
            accentColor={accentColor}
        >
            <div className="grid md:grid-cols-5 gap-10 items-center mb-16">
                <FadeIn className="md:col-span-3">
                    <h3 className="text-4xl font-bold mb-6" style={{ color: accentColor }}>My Tech Journey</h3>
                    <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                        <p>My career is driven by a curiosity for how things work. As a QA Engineer at <span className="font-semibold" style={{ color: accentColor }}>SoundCloud</span>, I help deliver a flawless audio experience to millions, blending meticulous manual testing with sophisticated test automation.</p>
                        <p>I am fascinated by the potential of AI to revolutionize software testing and am actively pursuing knowledge in this transformative field.</p>
                    </div>
                </FadeIn>
                <FadeIn className="md:col-span-2 flex justify-center">
                    <img src={imageAssets.tech.profile} alt="Rahaf Jannuod, QA Engineer" className="rounded-lg shadow-2xl w-full max-w-xs object-cover aspect-square"/>
                </FadeIn>
            </div>

            <div className="space-y-16">
                <div>
                    <FadeIn>
                        <h3 className="text-3xl font-bold mb-8" style={{ color: accentColor }}>Skills & Expertise</h3>
                    </FadeIn>
                    <FadeInStagger className="flex flex-wrap gap-3">
                        {techSkills.map(skill => <SkillBadge key={skill} color={accentColor}>{skill}</SkillBadge>)}
                    </FadeInStagger>
                </div>
                <div>
                    <FadeIn>
                        <h3 className="text-3xl font-bold mb-8" style={{ color: accentColor }}>Courses & Certifications</h3>
                    </FadeIn>
                    <FadeInStagger className="grid md:grid-cols-2 gap-6">
                        {displayedCourses.map(course => (
                            <li key={course.title} className="p-5 bg-white/5 rounded-lg list-none transition-all duration-300 hover:bg-white/10 hover:shadow-lg flex flex-col h-full">
                                <p className="font-semibold text-lg text-white">{course.title}</p>
                                <p className="text-md text-gray-300 mb-1">{course.provider}</p>
                                <div className="text-xs text-gray-400 flex flex-wrap gap-x-4 gap-y-1">
                                    <span>Issued: {course.issued}</span>
                                    <span>Credential ID: {course.credentialId}</span>
                                </div>
                            </li>
                        ))}
                    </FadeInStagger>
                    {techCourses.length > initialCourseCount && (
                        <FadeIn>
                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => setShowAllCourses(!showAllCourses)}
                                    className="font-semibold hover:text-white transition-colors duration-300 flex items-center group mx-auto"
                                    style={{ color: accentColor }}
                                    aria-expanded={showAllCourses}
                                >
                                    <span>{showAllCourses ? 'Show Less' : 'Show More'}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform duration-300 ${showAllCourses ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </FadeIn>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default TechSection;