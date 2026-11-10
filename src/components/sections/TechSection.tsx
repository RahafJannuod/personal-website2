import React from 'react';
import Section from '../Section';
import { FadeIn } from '../FadeIn';
import { certifications, nomiBoomiLinks, techExperience, techProjects, testingSkills } from '../../data/content';
import { themeColors, imageAssets } from '../../data/config';
import { createGlowTextStyle, createLightGlowTextStyle } from '../../utils/styles';

const accentColor = themeColors.accent.tech;

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-2xl md:text-3xl font-bold mb-5" style={createGlowTextStyle(accentColor, 'high')}>
        {children}
    </h3>
);

// A store button; without a link yet it shows the same way but isn't clickable
const StoreButton: React.FC<{ label: string; href: string }> = ({ label, href }) => {
    const className = 'inline-block rounded-full bg-black/50 border border-white/30 px-4 py-1.5 text-sm font-bold transition-transform duration-200 hover:scale-105';
    return href
        ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{label}</a>
        : <span className={`${className} opacity-80 cursor-default`}>{label}</span>;
};

const TechSection: React.FC = () => {
    return (
        <Section
            id="tech"
            backgroundImageUrl={imageAssets.tech.background}
            title="QA Specialist"
            subtitle="I make sure apps work well before they reach people."
            accentColor={accentColor}
        >
            <div className="space-y-12 text-white" style={createLightGlowTextStyle(accentColor)}>
                {/* About */}
                <FadeIn className="flex flex-col sm:flex-row items-center gap-6">
                    <img
                        src={imageAssets.tech.profile}
                        alt="Rahaf Jannuod"
                        loading="lazy"
                        className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full object-cover shadow-2xl border-2"
                        style={{ borderColor: accentColor }}
                    />
                    <div className="space-y-3 text-lg leading-relaxed text-center sm:text-left">
                        <p>I'm a QA Specialist and iOS Release Manager at SoundCloud. I test new features, find bugs, and help each iOS release reach millions of listeners.</p>
                        <p>Before tech, music was my full-time job for more than 10 years. I still learn something new every day, and I build my own apps and games to grow my skills.</p>
                    </div>
                </FadeIn>

                {/* Experience timeline */}
                <FadeIn>
                    <SubHeading>Experience</SubHeading>
                    <ol className="border-l-2 ml-2 space-y-6" style={{ borderColor: `${accentColor}99` }}>
                        {techExperience.map(job => (
                            <li key={job.role} className="relative pl-6">
                                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full" style={{ backgroundColor: accentColor }} aria-hidden="true"></span>
                                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                                    <p className="text-lg font-bold">{job.role}</p>
                                    <p className="text-sm opacity-80">{job.dates}</p>
                                </div>
                                <p className="text-sm opacity-80">{job.place}</p>
                                <p className="mt-1">{job.text}</p>
                            </li>
                        ))}
                    </ol>
                </FadeIn>

                {/* Projects */}
                <FadeIn>
                    <SubHeading>Projects</SubHeading>

                    {/* Featured: the game, with its icon and name logo on either side */}
                    <div className="rounded-xl bg-black/25 p-4 mb-3 grid grid-cols-2 sm:grid-cols-[6rem_1fr_6rem] gap-4 items-center">
                        <img src={imageAssets.projects.nomiBoomiIcon} alt="Nomi Boomi app icon" loading="lazy" className="w-24 h-24 rounded-2xl shadow-lg justify-self-center" />
                        <img src={imageAssets.projects.nomiBoomiLogo} alt="Nomi Boomi: Move, eat, BOOM!" loading="lazy" className="w-24 h-24 rounded-2xl shadow-lg justify-self-center sm:order-3" />
                        <div className="col-span-2 sm:col-span-1 sm:order-2 text-center">
                            <p className="text-xl font-bold">Nomi Boomi</p>
                            <p className="text-sm">I've loved puzzle games since I was little, so I made my own with Claude AI. 150 levels in 4 worlds.</p>
                            <div className="flex justify-center gap-2 mt-2">
                                <StoreButton label="App Store" href={nomiBoomiLinks.appStore} />
                                <StoreButton label="Google Play" href={nomiBoomiLinks.googlePlay} />
                            </div>
                        </div>
                    </div>

                    <ul className="grid sm:grid-cols-3 gap-3">
                        {techProjects.map(project => (
                            <li key={project.name} className="rounded-xl bg-black/25 p-4 flex flex-col text-center">
                                <p className="font-bold">{project.name}</p>
                                <p className="text-sm opacity-90 flex-1">{project.text}</p>
                                {project.href && (
                                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-2 text-sm underline" style={{ color: accentColor }}>
                                        GitHub
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </FadeIn>

                {/* Skills, grouped */}
                <FadeIn>
                    <SubHeading>How I work</SubHeading>
                    <dl className="space-y-3">
                        {testingSkills.map(({ group, items }) => (
                            <div key={group} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                                <dt className="w-28 flex-shrink-0 font-bold" style={{ color: accentColor }}>{group}</dt>
                                <dd>{items.join(' · ')}</dd>
                            </div>
                        ))}
                    </dl>
                </FadeIn>

                {/* Certifications, one slim row each */}
                <FadeIn>
                    <SubHeading>Certifications</SubHeading>
                    <ul className="flex flex-wrap gap-2">
                        {certifications.map(cert => (
                            <li key={cert.name} className="rounded-full bg-black/25 border px-3 py-1 text-sm" style={{ borderColor: `${accentColor}88` }}>
                                {cert.name} <span className="opacity-70">· {cert.provider}</span>
                            </li>
                        ))}
                    </ul>
                </FadeIn>
            </div>
        </Section>
    );
};

export default TechSection;
