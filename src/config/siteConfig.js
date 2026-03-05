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
    mission: "Engineering to reduce human suffering and expand human capability through accessible, human-centered assistive technology.",
  },

  // Technical Skills Categories
  skills: [
    {
      category: "CAD & Design",
      items: ["SolidWorks", "Fusion 360", "Parametric Modeling", "DFM Principles", "Rendering"]
    },
    {
      category: "Programming & Control",
      items: ["Python", "C/C++", "Arduino", "Raspberry Pi", "MATLAB", "Git"]
    },
    {
      category: "Electronics & Fabrication",
      items: ["Circuit Design", "PCB Layout", "3D Printing (FDM/SLA)", "CNC Machining", "Laser Cutting"]
    },
    {
      category: "Soft Skills",
      items: ["Technical Writing", "Project Management", "STEAM Education", "Public Speaking"]
    }
  ],

  // Core Principles (Moved from Methodology)
  principles: [
    {
      title: "Human-Centered Design",
      description: "Prioritizing the end-user's physical comfort and dignity above all other design constraints.",
      icon: "🧠"
    },
    {
      title: "Design for Manufacturing (DFM)",
      description: "Ensuring every component is optimized for its specific production method to reduce waste and cost.",
      icon: "🏭"
    },
    {
      title: "Open Source Ethos",
      description: "Believing that shared knowledge accelerates innovation and improves accessibility in medical tech.",
      icon: "🔓"
    }
  ],

  // Inspiration & Learning Resources (Enhanced Feature #11)
  resources: [
    { 
      title: "Design for the Real World", 
      author: "Victor Papanek", 
      type: "Book",
      description: "A foundational text on social and environmental responsibility in design.",
      url: "https://www.amazon.com/Design-Real-World-Victor-Papanek/dp/0500285335",
      image: "/images/projects/prosthetic-hand.jpg" // Placeholder
    },
    { 
      title: "The Design of Everyday Things", 
      author: "Don Norman", 
      type: "Book",
      description: "Explores the cognitive psychology behind how people interact with objects.",
      url: "https://jnd.org/the-design-of-everyday-things-revised-and-expanded-edition/",
      image: "/images/projects/robotics-kit.jpg" // Placeholder
    },
    { 
      title: "Hackaday", 
      author: "Community", 
      type: "Website",
      description: "A goldmine for hardware engineering inspiration and teardowns.",
      url: "https://hackaday.com/",
      image: "/images/projects/prosthetic-hand.jpg" // Placeholder
    }
  ],

  // Social Media Links
  socials: {
    github: "https://github.com/[YOUR_GITHUB_USERNAME]",
    linkedin: "https://linkedin.com/in/[YOUR_LINKEDIN_PROFILE]",
  },

  // Availability Status
  availability: {
    status: "Available", // e.g., "Available", "Busy", "Seeking Internships"
    message: "Seeking Summer 2025 Internships",
    showBadge: true,
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
    tagline: "Have a project in mind or want to discuss my work? Reach out below.",
    emailServiceId: "", // Placeholder for service like Formspree
    discussionTopics: [
      "📄 Request Project Documentation (CAD/BOM)",
      "🤝 Collaboration Opportunities",
      "💼 Internship/Full-time Inquiries",
      "🔬 Technical Questions",
      "☕ General Networking",
    ],
  },
};