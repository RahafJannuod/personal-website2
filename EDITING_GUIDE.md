# How to Customize Your Portfolio

Colors and images are set in `src/data/config.ts`. Text content, such as projects, skills, courses, and bands, is in `src/data/content.ts`.

Image files live in `public/images/`. A file at `public/images/hero/photo.jpg` is referenced in the code as `/images/hero/photo.jpg`.

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
        background: '/images/hero/hero-background.jpg',
    },
    tech: {
        background: '/images/tech/tech-background.jpg',
        profile: '/images/tech/tech-profile.jpg',
    },
    // ... music, crafts, footer
};
```

To change an image, either replace the file and keep its name, or add a new file and update the path. Compress images before adding them, because large photos make the site slow to load.

## 3. Changing the Crafts Gallery

Edit the `craftProjects` array in `src/data/content.ts`:

```ts
{
    id: 'hand-poured-candles',
    mainImage: '/images/gallery/gallery-01.jpg', // Shown in the gallery
    title: 'Hand-poured Candles',
    category: 'Candles',
    description: 'Artisanal candles made with natural waxes and essential oils in custom containers.',
    photos: [                                    // Shown when the project is opened
        '/images/gallery/gallery-01.jpg',
        '/images/gallery/gallery-01-02.jpg',
    ],
},
```

To add a photo, put the file in `public/images/gallery/` and add its path to `photos`.
