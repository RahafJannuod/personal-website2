# How to Customize Your Portfolio

Colors and images are set in `src/data/config.ts`. Lists of content, such as projects, skills, courses, bands, music lessons, and the footer's social links, are in `src/data/content.ts`.

Image files live in `public/images/`. A file at `public/images/hero/photo.jpg` is referenced in the code as `/images/hero/photo.jpg`.

## Where things are

| File | What it contains |
|---|---|
| `src/App.tsx` | The page layout: menu, sections in order, footer |
| `src/components/sections/` | One file per section: `HeroSection` (top card), `TechSection`, `MusicSection`, `CraftsSection` |
| `src/components/Section.tsx` | The shared frame for the Tech, Music, and Crafts sections |
| `src/components/SectionBackground.tsx` | The darkened background photo and dark corners behind every section |
| `src/components/Header.tsx`, `Footer.tsx` | The menu bar and the footer |
| `src/components/ProjectModal.tsx` | The window that opens when you click a crafts project |
| `src/index.css` | How see-through and dark the background photos are, how far they fade into each other, and how dark the corners are |
| `src/utils/styles.ts` | The glowing text styles |

The top card's text (your intro sentence and the role buttons) is written directly in `src/components/sections/HeroSection.tsx`.

## 1. Changing Website Colors

Change the accent colors by editing `themeColors` in `src/data/config.ts`:

```ts
export const themeColors = {
    accent: {
        tech: '#00AC95',      // Color for the "Tech" section
        music: '#D43241',     // Color for the "Music" section
        crafts: '#F25F67',    // Color for the "Crafts" section
        navHover: '#FB8D3E',  // Color for navigation links on hover
    },
};
```

The logo's glow animation has its own colors, set in `tailwind.config.js`.

## 2. Changing Section Images

Change section backgrounds and other key images by editing `imageAssets` in `src/data/config.ts`:

```ts
export const imageAssets = {
    hero: {
        portrait: '/images/hero/hero-portrait.jpg',        // Your photo in the top card
        background: '/images/hero/hero-records.jpg',       // Background behind the top card
    },
    tech: {
        background: '/images/tech/tech-background.jpg',
        profile: '/images/tech/tech-profile.jpg',
    },
    // ... music, crafts, footer
};
```

To change an image, either replace the file and keep its name, or add a new file and update the path. Compress images before adding them, because large photos make the site slow to load.

## 3. Changing the Tech Section

All the Tech content is in `src/data/content.ts`:

| Name | What it is |
|---|---|
| `techExperience` | The Experience timeline: role, place, dates and one sentence each |
| `nomiBoomiLinks` | The App Store and Google Play links for Nomi Boomi. Paste each link between the quotes. While a link is empty, its button shows but can't be clicked |
| `techProjects` | The small project cards. `href` is the GitHub link; leave it out to hide the link |
| `testingSkills` | The "How I work" rows: a group name and its tools |
| `certifications` | The certificate chips: name and provider |

The About text and the Nomi Boomi sentence are written directly in `src/components/sections/TechSection.tsx`. The Nomi Boomi icon and name logo are set in `imageAssets.projects` in `src/data/config.ts`.

## 4. Changing the Crafts Gallery

Edit the `craftProjects` array in `src/data/content.ts`:

```ts
{
    id: 'hand-poured-candles',
    mainImage: '/images/gallery/gallery-01.jpg', // Shown in the gallery
    title: 'Hand-poured Candles',
    description: 'Artisanal candles made with natural waxes and essential oils in custom containers.',
    photos: [                                    // Shown when the project is opened
        '/images/gallery/gallery-01.jpg',
        '/images/gallery/gallery-01-02.jpg',
    ],
},
```

To add a photo, put the file in `public/images/gallery/` and add its path to `photos`.
