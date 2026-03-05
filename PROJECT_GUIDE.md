# How to Add New Projects

This guide explains how to add new engineering projects to your portfolio.

## Step 1: Prepare your Images
1. Place your project image in `public/images/projects/`.
2. Recommended size: 1200x800px (3:2 aspect ratio) for best results.
3. Name it simply, e.g., `my-new-project.jpg`.

## Step 2: Add Data to `src/data/projects.js`
Open `src/data/projects.js` and copy-paste this template into the `projects` array:

```javascript
  {
    id: 5, // Increment this number
    slug: 'my-new-project',
    title: 'Project Title',
    description: 'A short 1-2 sentence preview for the card.',
    image: '/images/projects/my-new-project.jpg',
    tags: ['Python', 'CAD'],
    date: 'Month Year',
    duration: 'X weeks',
    cost: '$XXX',
    featured: true,
    github: 'https://github.com/yourusername/repo',
    youtubeId: 'VIDEO_ID', // Optional: YouTube video ID
    gallery: [             // Optional: Array of image paths
      '/images/projects/img1.jpg',
      '/images/projects/img2.jpg'
    ],
    specs: {               // Optional: Key-value pairs for technical specs
      "Power": "12V",
      "Material": "Carbon Fiber"
    },
    collaboration: {       // Optional: Set to active to show collab invite
      active: true,
      role: "Firmware Dev",
      description: "Need help with X..."
    },
    problem: `...`,
    approach: `...`,
    technicalDetails: [...],
    results: `...`,
    lessons: [...],
    futureWork: `...`,
  },
```

## Step 3: Add a Blog Post (`src/data/posts.js`)
```javascript
  {
    id: 3,
    slug: 'my-post-title',
    title: 'Post Title',
    excerpt: 'Short summary for the blog list page.',
    date: 'Month Day, Year',
    category: 'Engineering Insights', // Use a unique name for color-coding
    readTime: '5 min read',
    image: '/images/projects/image.jpg',
    tags: ['Robotics', 'Tutorial'],
    content: `
# My Header
Supporting full **Markdown** syntax here.
    `
  },
```

## Step 4: Add a Resource (`src/config/siteConfig.js`)
```javascript
    { 
      title: "Title", 
      author: "Author", 
      type: "Book", // This is used for filtering
      description: "Description...",
      url: "https://...",
      image: "/images/projects/image.jpg"
    },
```

## Step 5: (Optional) Manage Featured Projects
There are two ways to make a project appear on the Homepage:

1. **The Easy Way:** Set `featured: true` in the project object (see Step 2).
2. **The Manual Way:** Add the `slug` to the `featuredProjects` list in `src/config/siteConfig.js`. Use this if you want to control the exact order of projects on the home page.

## Verification
1. Run `npm run dev` to see the changes.
2. Check the **Home** page to see if the card appears.
3. Check the **/projects** page to see if it's listed.
4. Click the project to ensure the **Detail** page loads all data correctly.
