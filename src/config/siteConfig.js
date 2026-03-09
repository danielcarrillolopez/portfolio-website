// src/config/siteConfig.js

export const siteConfig = {
  // General Site Information
  title: "[YOUR NAME] - [YOUR PROFESSIONAL TITLE]",
  description: "[YOUR PORTFOLIO DESCRIPTION]",
  
  // SEO Meta Tags
  seo: {
    keywords: ["portfolio", "engineering", "biomedical", "robotics", "forensics", "[YOUR NAME]"],
  },

  // Owner Information
  author: {
    name: "[YOUR NAME]",
    email: "[YOUR_EMAIL_ADDRESS]",
    bioHeadline: "[YOUR BIO HEADLINE]",
    mission: "Engineering technology that solves problems people didn't think could be solved, through resourceful, human-centered design.",
  },

  // Technical Skills Categories
  skills: [
    {
      category: "CAD & Design",
      items: ["SolidWorks", "Fusion 360", "Parametric Modeling", "DFM Principles", "Rendering"]
    },
    {
      category: "Programming & Control",
      items: ["Python", "C/C++", "Arduino", "Raspberry Pi", "MATLAB", "ROS2", "Git"]
    },
    {
      category: "Electronics & Fabrication",
      items: ["Circuit Design", "PCB Layout", "3D Printing (FDM/SLA)", "CNC Machining", "Laser Cutting"]
    },
    {
      category: "Analytical & Soft Skills",
      items: ["Technical Writing", "Forensic Analysis", "STEAM Education", "Public Speaking", "Social Intelligence"]
    }
  ],

  // Core Principles
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
      description: "Believing that shared knowledge accelerates innovation and improves accessibility in tech.",
      icon: "🔓"
    }
  ],

  // Inspiration & Learning Resources
  resources: [
    { 
      title: "General Systems Theory", 
      author: "Ludwig von Bertalanffy (Concept)", 
      type: "Concept",
      description: "Understanding circular causality, feedback loops, and how patterns maintain themselves.",
      url: "/blog/systems-theory-loops",
      image: "/images/projects/robotics-kit.jpg"
    },
    { 
      title: "The Ultimate Circular Motion Guide", 
      author: "Daniel Carrillo Lopez", 
      type: "Tutorial",
      description: "A comprehensive guide to centripetal acceleration, period, and flat-circle physics problems.",
      url: "/blog/the-ultimate-circular-motion-guide",
      image: "/images/projects/robotics-kit.jpg"
    },
    { 
      title: "Captivate: The Science of Succeeding with People", 
      author: "Vanessa Van Edwards", 
      type: "Book",
      description: "A foundational text on social intelligence and building rapport in professional environments.",
      url: "https://www.scienceofpeople.com/captivate/",
      image: "/images/projects/robotics-kit.jpg"
    },
    { 
      title: "Locard's Exchange Principle", 
      author: "Edmond Locard", 
      type: "Concept",
      description: "The fundamental law of forensics: 'Every contact leaves a trace.' Essential for technical debugging.",
      url: "/blog/locards-exchange-principle-debugging",
      image: "/images/projects/prosthetic-hand.jpg"
    },
    { 
      title: "Hackaday", 
      author: "Community", 
      type: "Website",
      description: "A goldmine for hardware engineering inspiration and teardowns.",
      url: "https://hackaday.com/",
      image: "/images/projects/prosthetic-hand.jpg"
    },
    { 
      title: "Gemini CLI Documentation", 
      author: "Google Gemini Team", 
      type: "Documentation",
      description: "Official guide for setting up and using the Gemini AI directly from your terminal.",
      url: "https://github.com/google-gemini/gemini-cli",
      image: "/images/projects/robotics-kit.jpg"
    },
    { 
      title: "Design for the Real World", 
      author: "Victor Papanek", 
      type: "Book",
      description: "A foundational text on social and environmental responsibility in design.",
      url: "https://www.amazon.com/Design-Real-World-Victor-Papanek/dp/0500285335",
      image: "/images/projects/prosthetic-hand.jpg"
    },
    { 
      title: "The Design of Everyday Things", 
      author: "Don Norman", 
      type: "Book",
      description: "Explores the cognitive psychology behind how people interact with objects.",
      url: "https://jnd.org/the-design-of-everyday-things-revised-and-expanded-edition/",
      image: "/images/projects/robotics-kit.jpg"
    },
    { 
      title: "The Private AI Stack", 
      author: "Ollama / n8n / NetworkChuck", 
      type: "Tutorial",
      description: "A comprehensive guide to hosting local LLMs and automating your workflow with n8n.",
      url: "https://www.youtube.com/@NetworkChuck",
      image: "/images/projects/robotics-kit.jpg"
    },
    { 
      title: "The Engineer's Prompt Library", 
      author: "Daniel Carrillo", 
      type: "Resource",
      description: "Curated collection of advanced system prompts for technical research and writing.",
      url: "/resources#prompts",
      image: "/images/projects/robotics-kit.jpg"
    },
    { 
      title: "Linking Your Thinking", 
      author: "Nick Milo", 
      type: "Platform",
      description: "Personal Knowledge Management strategies using Obsidian and Maps of Content (MOCs).",
      url: "https://www.youtube.com/@linkingyourthinking",
      image: "/images/projects/robotics-kit.jpg"
    }
  ],

  // Social Media Links
  socials: {
    github: "https://github.com/[YOUR_GITHUB_USERNAME]",
    linkedin: "https://linkedin.com/in/[YOUR_LINKEDIN_PROFILE]",
  },

  // Availability Status
  availability: {
    status: "Available",
    message: "Seeking Summer 2025 Internships",
    showBadge: true,
  },

  // Dark Mode Configuration
  darkMode: false,

  // Contact Page Settings
  contact: {
    tagline: "Have a project in mind or want to discuss my work? Reach out below.",
    emailServiceId: "",
    discussionTopics: [
      "📄 Request Project Documentation (CAD/BOM)",
      "🤝 Collaboration Opportunities",
      "💼 Internship/Full-time Inquiries",
      "🔬 Technical Questions",
      "☕ General Networking",
    ],
  },
};
