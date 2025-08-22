# How to Customize Your Portfolio

This guide explains how to easily change the colors and images on your personal portfolio website. All major customizable assets are centralized in one or two files for your convenience.

## The Central Configuration File

The primary file for customization is located at: `data/config.ts`.

This file contains two main objects: `themeColors` and `imageAssets`.

---

## 1. Changing Website Colors

You can change the accent colors for each section of the website by modifying the `themeColors` object in `data/config.ts`.

### Example:

Here is the `themeColors` object:

```javascript
export const themeColors = {
    // ... other colors
    accent: {
        tech: '#00AC95',      // Color for the "Tech" section
        music: '#D43241',     // Color for the "Music" section
        crafts: '#F25F67',    // Color for the "Crafts" section
        navHover: '#FB8D3E',  // Color for navigation links on hover
    },
};
```

To change the color of the "Tech" section, simply replace the hex code `'#00AC95'` with a new one.

**For example, to make it blue:**

```javascript
// ...
tech: '#3b82f6', // New blue color
// ...
```

The website will automatically update to use the new color across the entire section.

---

## 2. Changing Section Images

You can change the main background image for each section and other key images (like your profile picture) by modifying the `imageAssets` object in `data/config.ts`.

### Important Note:

For best performance, use URLs from an image hosting service like Unsplash, or make sure your own images are optimized for the web before using them.

### Example:

Here is the `imageAssets` object:

```javascript
export const imageAssets = {
    hero: {
        background: 'https://images.unsplash.com/...', // URL for the main landing page background
    },
    tech: {
        background: 'https://images.unsplash.com/...', // URL for the Tech section background
        profile: 'https://images.unsplash.com/...',    // URL for your profile picture in the Tech section
    },
    music: {
        background: 'https://images.unsplash.com/...',
        percussion: 'https://images.unsplash.com/...', // First image in the Music section
        orchestra: 'https://images.unsplash.com/...',  // Second image in the Music section
    },
    crafts: {
        background: 'https://images.unsplash.com/...',
    },
    footer: {
        background: 'https://images.unsplash.com/...', // URL for the footer background
    },
};
```

To change an image, simply replace the existing URL string with the URL of your new image.

---

## 3. Changing the "Crafts" Project Gallery Images

The images for your handmade projects are located in a different file for better organization: `data/content.ts`.

Find the `craftProjects` array inside this file.

### Example:

```javascript
export const craftProjects = [
    {
        imageUrl: 'https://images.unsplash.com/...', // <-- CHANGE THIS URL
        title: 'Floral Watercolour',
        category: 'Painting'
    },
    {
        imageUrl: 'https://images.unsplash.com/...', // <-- CHANGE THIS URL
        title: 'Ceramic Mugs',
        category: 'Pottery'
    },
    // ... more projects
];
```

To update a project image, replace the `imageUrl` for that project. You can also change the `title` and `category` here.
