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
    id: 3, // Increment this number
    slug: 'my-new-project', // This becomes the URL: /projects/my-new-project
    title: 'Project Title',
    description: 'A short 1-2 sentence preview for the card.',
    image: '/images/projects/my-new-project.jpg',
    tags: ['Tag 1', 'Tag 2'], // e.g., 'Python', 'CAD'
    date: 'Month Year',
    duration: 'X weeks',
    cost: '$XXX',
    featured: true, // Set to 'true' to show on the Homepage
    github: 'https://github.com/yourusername/repo',
    
    // Detailed Content for the Project Page
    problem: `Describe the challenge you were solving here.`,
    approach: `Describe your engineering process and design choices.`,
    technicalDetails: [
      'Detail 1 (e.g., Microcontroller used)',
      'Detail 2 (e.g., Software stack)',
      'Detail 3 (e.g., Materials)',
    ],
    results: `What was the final outcome? Did it work?`,
    lessons: [
      'What did you learn?',
      'What would you do differently?',
    ],
    futureWork: `What are the next steps for this project?`,
  },
```

## Step 3: (Optional) Manage Featured Projects
There are two ways to make a project appear on the Homepage:

1. **The Easy Way:** Set `featured: true` in the project object (see Step 2).
2. **The Manual Way:** Add the `slug` to the `featuredProjects` list in `src/config/siteConfig.js`. Use this if you want to control the exact order of projects on the home page.

## Verification
1. Run `npm run dev` to see the changes.
2. Check the **Home** page to see if the card appears.
3. Check the **/projects** page to see if it's listed.
4. Click the project to ensure the **Detail** page loads all data correctly.
