export const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#tech', label: 'Tech' },
    { href: '#music', label: 'Music' },
    { href: '#crafts', label: 'Crafts' },
];

export interface CraftProject {
    id: string;
    mainImage: string;
    title: string;
    category: string;
    description: string;
    photos: string[];
}

export const craftProjects: CraftProject[] = [
    {
        id: 'hand-poured-candles',
        mainImage: '/images/gallery/gallery-01.jpg',
        title: 'Hand-poured Candles',
        category: 'Candles',
        description: 'Artisanal candles made with natural waxes and essential oils in custom containers.',
        photos: [
            '/images/gallery/gallery-01.jpg',
            '/images/gallery/gallery-01-02.jpg',
            '/images/gallery/gallery-01-03.jpg',
            '/images/gallery/gallery-01-04.jpg',
            '/images/gallery/gallery-01-05.jpg',
            '/images/gallery/gallery-01-06.jpg',
            '/images/gallery/gallery-01-07.jpg',
            '/images/gallery/gallery-01-08.jpg',
            '/images/gallery/gallery-01-09.jpg',
            '/images/gallery/gallery-01-10.jpg',
            '/images/gallery/gallery-01-11.jpg',
            '/images/gallery/gallery-01-12.jpg',
            '/images/gallery/gallery-01-13.jpg',
            '/images/gallery/gallery-01-14.jpg'
        ]
    },
    {
        id: 'macrame-art',
        mainImage: '/images/gallery/gallery-02.jpg',
        title: 'Macrame Art',
        category: 'Knotting',
        description: 'Beautiful macrame pieces using high-quality cotton rope and decorative beads.',
        photos: [
            '/images/gallery/gallery-02.jpg',
            '/images/gallery/gallery-02-02.jpg',
            '/images/gallery/gallery-02-03.jpg',
            '/images/gallery/gallery-02-04.jpg',
            '/images/gallery/gallery-02-05.jpg',
            '/images/gallery/gallery-02-06.jpg',
            '/images/gallery/gallery-02-07.jpg',
            '/images/gallery/gallery-02-08.jpg',
            '/images/gallery/gallery-02-09.jpg',
            '/images/gallery/gallery-02-10.jpg'
        ]
    },
    {
        id: 'dreamcatcher',
        mainImage: '/images/gallery/gallery-03.jpg',
        title: 'Dreamcatcher',
        category: 'Mixed Media',
        description: 'Handcrafted dreamcatchers with intricate designs and natural materials.',
        photos: [
            '/images/gallery/gallery-03.jpg',
            '/images/gallery/gallery-03-02.jpg',
            '/images/gallery/gallery-03-03.jpg',
            '/images/gallery/gallery-03-04.jpg',
            '/images/gallery/gallery-03-05.jpg',
            '/images/gallery/gallery-03-06.jpg',
            '/images/gallery/gallery-03-07.jpg',
            '/images/gallery/gallery-03-08.jpg',
            '/images/gallery/gallery-03-09.jpg',
            '/images/gallery/gallery-03-10.jpg',
            '/images/gallery/gallery-03-11.jpg',
            '/images/gallery/gallery-03-12.jpg'
        ]
    },
    {
        id: 'weaving-art',
        mainImage: '/images/gallery/gallery-04.jpg',
        title: 'Weaving Art',
        category: 'Textiles',
        description: 'Contemporary woven art pieces using traditional techniques and modern materials.',
        photos: [
            '/images/gallery/gallery-04.jpg',
            '/images/gallery/gallery-04-02.jpg',
            '/images/gallery/gallery-04-03.jpg',
            '/images/gallery/gallery-04-04.jpg',
            '/images/gallery/gallery-04-05.jpg',
            '/images/gallery/gallery-04-06.jpg',
            '/images/gallery/gallery-04-07.jpg',
            '/images/gallery/gallery-04-08.jpg'
        ]
    },
    {
        id: 'wall-hangings',
        mainImage: '/images/gallery/gallery-05.jpg',
        title: 'Wall Hangings',
        category: 'Mixed Media',
        description: 'Unique wall decorations combining various materials and artistic techniques.',
        photos: [
            '/images/gallery/gallery-05.jpg',
            '/images/gallery/gallery-05-02.jpg',
            '/images/gallery/gallery-05-03.jpg',
            '/images/gallery/gallery-05-04.jpg',
            '/images/gallery/gallery-05-05.jpg',
            '/images/gallery/gallery-05-06.jpg',
            '/images/gallery/gallery-05-07.jpg',
            '/images/gallery/gallery-05-08.jpg',
            '/images/gallery/gallery-05-09.jpg',
            '/images/gallery/gallery-05-10.jpg',
            '/images/gallery/gallery-05-11.jpg',
            '/images/gallery/gallery-05-12.jpg',
            '/images/gallery/gallery-05-13.jpg',
            '/images/gallery/gallery-05-14.jpg',
            '/images/gallery/gallery-05-15.jpg',
            '/images/gallery/gallery-05-16.jpg'
        ]
    },
    {
        id: 'clay-art',
        mainImage: '/images/gallery/gallery-06.jpg',
        title: 'Clay Art',
        category: 'Pottery',
        description: 'Handcrafted clay pieces with unique glazes and artistic designs.',
        photos: [
            '/images/gallery/gallery-06.jpg',
            '/images/gallery/gallery-06-02.jpg',
            '/images/gallery/gallery-06-03.jpg',
            '/images/gallery/gallery-06-04.jpg',
            '/images/gallery/gallery-06-05.jpg'
        ]
    },
    {
        id: 'mirrors-decoration',
        mainImage: '/images/gallery/gallery-07.jpg',
        title: 'Mirrors Decoration',
        category: 'Mixed Media',
        description: 'Beautifully decorated mirrors with artistic embellishments and designs.',
        photos: [
            '/images/gallery/gallery-07.jpg',
            '/images/gallery/gallery-07-02.jpg',
            '/images/gallery/gallery-07-03.jpg',
            '/images/gallery/gallery-07-04.jpg',
            '/images/gallery/gallery-07-05.jpg',
            '/images/gallery/gallery-07-06.jpg',
            '/images/gallery/gallery-07-07.jpg',
            '/images/gallery/gallery-07-08.jpg',
            '/images/gallery/gallery-07-09.jpg',
            '/images/gallery/gallery-07-10.jpg',
            '/images/gallery/gallery-07-11.jpg'
        ]
    }
];

export const techSkills = ['Test Automation', 'CI/CD', 'Agile Methodologies', 'API Testing', 'Performance Testing', 'JavaScript', 'Python', 'SQL', 'JIRA', 'Git'];

export const techCourses = [
    {
        title: 'Introduction to Android Mobile Application Development',
        provider: 'Meta',
        issued: 'May 2025',
        credentialId: '7P39FQ91AYQB',
    },
    {
        title: 'Programming Fundamentals in Swift',
        provider: 'Meta',
        issued: 'May 2025',
        credentialId: '59KTD9A1IUDR',
    },
    {
        title: 'Principles of UX/UI Design',
        provider: 'Meta',
        issued: 'Apr 2025',
        credentialId: 'ZYK2JIO193RO',
    },
    {
        title: 'Agile Project Management',
        provider: 'Google',
        issued: 'Mar 2025',
        credentialId: 'U4DKP1WC33WM',
        skills: ['Scrum Framework & Methodologies', 'Agile Mindset & Principles', 'Agile Planning & Estimation', 'Communication & Collaboration', 'Risk & Change Management', 'Agile Leadership & Coaching']
    },
    {
        title: 'Version Control',
        provider: 'Meta',
        issued: 'Mar 2025',
        credentialId: '0KR98JJDETRP',
        skills: ['Collaborating in Team Projects', 'Restoring Previous Versions and Managing Errors', 'Handling Remote Repositories', 'Working with Branches and Merging', 'Practical Use of Git']
    },
    {
        title: 'Crash Course on Python',
        provider: 'Google',
        issued: 'Jan 2025',
        credentialId: 'EJ1A7M9VXN9M',
        skills: ['Python (Programming Language)', 'Control Flow & Loops', 'Data Structures', 'Error Handling & Debugging', 'File Handling']
    },
    {
        title: 'ISTQB Foundation Level Software Testing Certification Prep Specialization',
        provider: 'Board Infinity',
        issued: 'Jan 2025',
        credentialId: 'QXN908YNCDIG',
        skills: ['Software Development Life Cycle (SDLC) & Testing Life Cycle (STLC)', 'Testing Types & Levels', 'Test Design Techniques', 'Test Management & Tools', 'Risk-Based Testing & Prioritization', 'Agile Testing & Test Automation Basics']
    },
    {
        title: 'Introduction to Git and GitHub',
        provider: 'Google',
        issued: 'Jan 2025',
        credentialId: 'ET7AUGZGM7AM',
        skills: ['Branching & Merging', 'Working with Remote Repositories (GitHub)', 'Collaboration & GitHub Workflows', 'Undoing Changes & Fixing Mistakes', 'GitHub Features & Best Practices']
    },
    {
        title: 'Introduction to Software Engineering',
        provider: 'IBM',
        issued: 'Jan 2025',
        credentialId: 'RTRVQHA8LU46',
    },
];

export const bandsAndOrchestras = [
    {
        role: 'Timpani',
        name: 'Ovidio De Ferrari Band',
        location: 'Dubai'
    },
    {
        role: 'Guitarist',
        name: 'Sufi Vibes - The AAA Reels Production and Playback Creatives Presentation',
        location: 'Dubai'
    },
    {
        role: 'Timpani and Percussionist',
        name: 'Mari Orchestra',
        location: 'Syria'
    },
    {
        role: 'Drums',
        name: 'Gloria choir/Dina Bélanger',
        location: 'Syria'
    },
    {
        role: 'Percussionist',
        name: 'Syrian National Symphony Orchestra',
        location: 'Syria'
    },
    {
        role: 'Percussionist',
        name: 'Damascus Conservatory Big Band',
        location: 'Syria'
    }
];