// src/config/siteConfig.js

export const siteConfig = {
  // General Site Information
  title: "Daniel Carrillo - Engineering Portfolio",
  description: "Aspiring Robotic Prosthetics Engineer & Researcher",
  
  // SEO Meta Tags
  seo: {
    keywords: ["portfolio", "engineering", "biomedical", "robotics", "prosthetics", "Daniel Carrillo"],
  },

  // Owner Information
  author: {
    name: "Daniel Carrillo",
    email: "daniel.martin.carrillo.lopez@gmail.com",
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

  // Social Media Links
  socials: {
    github: "https://github.com/danielcarrillolopez",
    linkedin: "https://www.linkedin.com/in/daniel-carrillo-1a5127349/",
  },

  // Availability Status
  availability: {
    status: "Available",
    message: "Seeking Summer 2025 Internships",
    showBadge: true,
  },

  // Dark Mode Configuration
  darkMode: false,

  // Global Animation Settings
  animations: {
    duration: 0.6, // Global duration in seconds
    distance: 30,  // Global slide distance in pixels
  },

  // Contact Page Settings
  contact: {
    tagline: "Have a project in mind or want to discuss my work? Reach out below.",
    formspreeId: "xeerarvn", 
    discussionTopics: [
      "📄 Request Project Documentation (CAD/BOM)",
      "🤝 Collaboration Opportunities",
      "💼 Internship/Full-time Inquiries",
      "🔬 Technical Questions",
      "☕ General Networking",
    ],
  },
};
