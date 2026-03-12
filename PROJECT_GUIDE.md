# Engineering Portfolio: Content Guide

This guide explains how to manage your projects, blog posts, resources, and mentors using the structured data and markdown system.

---

## 🏗️ 1. Adding a New Project

### Step 1: Prepare Assets
1.  Place your main cover image in `public/images/projects/`.
2.  (Optional) Place extra gallery images in the same folder.
3.  Recommended aspect ratio: **3:2** (e.g., 1200x800px).

### Step 2: Add Data to `src/data/projects.js`
Copy and paste this template into the `projects` array:

```javascript
  {
    id: 5, // Next available ID
    slug: 'my-project-slug',
    title: 'Project Name',
    description: 'Short summary for the project card.',
    image: '/images/projects/cover.jpg',
    tags: ['Robotics', 'CAD'],
    date: 'Month Year',
    duration: 'X weeks',
    cost: '$XXX',
    featured: true, // Show on homepage
    visible: true,  // Set to false to hide
    github: 'https://github.com/your-username/repo',
    youtubeId: 'VIDEO_ID', // Optional YouTube integration
    gallery: [             // Optional: Array of image paths
      '/images/projects/img1.jpg'
    ],
    specs: {               // Optional: Key-value pairs for technical specs
      "Power": "12V",
      "Material": "ABS"
    },
    collaboration: {       // Optional: Set to active to show collab invite
      active: true,
      role: "Role Name",
      description: "Short pitch for collaboration."
    },
    problem: `What was the challenge?`,
    approach: `How did you solve it?`,
    technicalDetails: ['Detail 1', 'Detail 2'],
    results: `What was the outcome?`,
    lessons: ['Lesson 1', 'Lesson 2'],
    futureWork: `What's next?`,
  },
```

---

## ✍️ 2. Adding a New Blog Post

### Step 1: Add Metadata to `src/data/posts.js`
```javascript
  {
    id: 4,
    slug: 'my-blog-post',
    title: 'Post Title',
    excerpt: 'Short summary for the blog list.',
    date: 'Month Day, Year',
    category: 'Engineering Insights', // Custom label
    readTime: '5 min read',
    image: '/images/projects/header.jpg',
    tags: ['Robotics', 'Career'],
    visible: true,
  },
```

### Step 2: Add Content (Markdown)
The system automatically checks for a markdown file in `src/content/blog/` that matches the post's **slug**.

1.  Create `src/content/blog/my-blog-post.md`.
2.  Write your content in full Markdown (supporting headers, lists, and code blocks).

---

## 📚 3. Adding a New Resource

### Step 1: Add Data to `src/data/resources.js`
```javascript
  { 
    title: "Resource Title", 
    author: "Author Name", 
    type: "Book", // E.g., Website, Tool, Course
    description: "Brief overview...",
    url: "https://...",
    image: "/images/projects/image.jpg"
  },
```
*The Resources page automatically updates its "Showing X resources" count and category filters based on your entries.*

---

## 🤝 4. Adding a Mentor

### Step 1: Add Data to `src/data/mentors.js`
```javascript
  {
    id: 5,
    name: "Mentor Name",
    title: "Current Title",
    organization: "Company/Lab",
    image: "/images/mentors/photo.jpg",
    bio: "Their background...",
    impact: "How they helped your journey.",
    visible: true,
    links: [
      { label: "LinkedIn", url: "https://..." }
    ]
  },
```

---

## 🔦 Verification Checklist
1.  Run `npm run dev` to preview.
2.  Check the **Home** page if `featured: true`.
3.  Check the **Projects** or **Blog** lists.
4.  Visit the **Resource** page to confirm the new count and filters work.
5.  Click through to individual project/blog pages to verify details.
