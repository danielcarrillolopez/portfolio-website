export const projects = [
  {
    id: 1,
    slug: 'prosthetic-hand',
    title: 'EMG-Controlled Prosthetic Hand',
    description: 'A functional prosthetic hand prototype controlled by muscle signals, designed for accessibility and user comfort.',
    image: '/images/projects/prosthetic-hand.jpg',
    tags: ['CAD', 'Arduino', 'EMG', '3D Printing'],
    date: 'January 2024',
    duration: '8 weeks',
    cost: '$180',
    featured: true,
    github: 'https://github.com/yourusername/prosthetic-hand',
    
    // Detailed content
    problem: `
      Commercial prosthetic hands cost $20,000-$100,000, making them 
      inaccessible to most amputees. Current affordable options lack 
      intuitive control and often break easily.
    `,
    approach: `
      I designed an open-source prosthetic hand using readily available 
      components and 3D printed parts. The design prioritizes:
      - Intuitive EMG sensor control
      - Durable, repairable construction
      - Cost under $200
      - Customizable fit
    `,
    technicalDetails: [
      'Microcontroller: Arduino Nano',
      'Sensors: 3x MyoWare EMG sensors',
      'Actuators: 5x MG996R servo motors',
      'Power: 7.4V 2600mAh LiPo battery',
      'Structure: PETG 3D printed components',
      'Weight: 420g (without battery)'
    ],
    results: `
      The prototype successfully demonstrated basic grasp patterns with 
      85% accuracy in controlled testing. Battery life exceeded 6 hours 
      of continuous use. User testing with 3 volunteers showed promising 
      comfort and control.
    `,
    lessons: [
      'EMG sensor placement is critical - spent 2 weeks optimizing locations',
      'Servo selection matters more than I expected for smooth motion',
      'User feedback during design phase saved 3 redesign cycles',
      'Documentation while building is 10x easier than after'
    ],
    futureWork: `
      Next version will include force feedback, improved finger mechanics, 
      and machine learning for pattern recognition. Long-term goal is 
      FDA approval pathway research.
    `
  },
  {
    id: 2,
    slug: 'steam-robotics-kit',
    title: 'Educational Robotics Kit',
    description: 'Modular robotics platform designed for K-12 STEAM workshops, teaching programming and engineering concepts.',
    image: '/images/projects/robotics-kit.jpg',
    tags: ['Python', 'Robotics', 'Education', 'Raspberry Pi'],
    date: 'September 2023',
    duration: '6 weeks',
    cost: '$65',
    featured: true,
    github: 'https://github.com/yourusername/steam-kit',
    
    // Add similar detailed fields...
  },
  // Add more projects...
];