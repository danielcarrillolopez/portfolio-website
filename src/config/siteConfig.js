// src/config/siteConfig.js

export const siteConfig = {
  // General Site Information
  title: "[YOUR NAME] - [YOUR PROFESSIONAL TITLE]",
  description: "[YOUR PORTFOLIO DESCRIPTION]",
  
  // SEO Meta Tags
  seo: {
    keywords: ["portfolio", "engineering", "biomedical", "robotics", "[YOUR NAME]"],
  },

  // Owner Information
  author: {
    name: "[YOUR NAME]",
    email: "[YOUR_EMAIL_ADDRESS]",
    bioHeadline: "[YOUR BIO HEADLINE]",
  },

  // Social Media Links
  socials: {
    github: "https://github.com/[YOUR_GITHUB_USERNAME]",
    linkedin: "https://linkedin.com/in/[YOUR_LINKEDIN_PROFILE]",
  },

  // Dark Mode Configuration
  // Set to 'true' to enable dark mode by default, 'false' for light mode
  darkMode: false,

  // Featured Projects on Homepage
  // Add the 'slug' of the projects you want to feature from 'src/data/projects.js'
  featuredProjects: [
    "prosthetic-hand",
    "steam-robotics-kit",
    // "your-next-featured-project-slug" 
  ],

  // Contact Page Settings
  contact: {
    tagline: "[YOUR CONTACT PAGE TAGLINE]",
    discussionTopics: [
      "✓ [TOPIC 1 YOU'RE OPEN TO DISCUSSING]",
      "✓ [TOPIC 2 YOU'RE OPEN TO DISCUSSING]",
      "✓ [TOPIC 3 YOU'RE OPEN TO DISCUSSING]",
      "✓ [TOPIC 4 YOU'RE OPEN TO DISCUSSING]",
      "✓ [TOPIC 5 YOU'RE OPEN TO DISCUSSING]",
    ],
  },
};