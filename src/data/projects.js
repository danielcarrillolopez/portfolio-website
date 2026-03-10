export const projects = [
  {
    id: 1,
    slug: 'synapse-haptic-band',
    title: 'Synapse: Haptic Band',
    description: 'A wearable silent alarm and notification system using intuitive haptic feedback for human-centered digital connection.',
    image: '/images/image.jpg',
    tags: ['Wearables', 'ESP32', 'Haptics', 'Human-Centered Design'],
    date: 'October 2025',
    duration: 'Ongoing',
    cost: '$30',
    featured: false,
    github: 'https://github.com/yourusername/synapse-haptics',
    problem: `In a world of constant auditory distraction, we miss critical alerts and struggle with jarring wake-up routines.`,
    approach: `Translating digital language into tactile sensation using an ESP32-C3 and precision vibration motors.`,
    technicalDetails: [
      'Microcontroller: Seeed XIAO ESP32-C3',
      'Actuators: Precision Haptic Motors',
      'Connectivity: Wi-Fi/Bluetooth (MQTT support)',
      'Design: Sleek, 24/7-wearable form factor'
    ],
    results: `Demonstrated instant, unmistakable communication patterns through touch. Received positive feedback from heavy sleepers and accessibility advocates.`,
    lessons: ['Haptics must feel like a natural extension of the nervous system.', 'Power management is critical for constant wearability.'],
    futureWork: `Integrating with smart home ecosystems and expanding to haptic navigation.`,
    specs: {
      "Controller": "Seeed XIAO ESP32-C3",
      "Voltage": "3.7V LiPo",
      "Wireless": "BLE 5.0 / Wi-Fi",
      "Haptics": "ERM Vibration Array"
    },
    collaboration: { active: true, role: "Mobile App Developer", description: "Looking for help building the cross-platform control app." }
  },
  {
    id: 2,
    slug: 'teddy-bluesworth-forensics',
    title: 'The Teddy Bluesworth Case: Forensic Simulation',
    description: 'A comprehensive technical storytelling project applying real-world forensic science principles to an investigative simulation.',
    image: '/images/image.jpg',
    tags: ['Forensics', 'Analytical Science', 'Technical Communication'],
    date: 'December 2024',
    duration: '3 Weeks',
    cost: 'N/A',
    featured: false,
    github: 'https://github.com/yourusername/forensic-files',
    problem: `Applying complex forensic methodologies (fiber analysis, odontometry, friction ridge patterns) to a simulated investigative environment.`,
    approach: `Utilized Locard's Exchange Principle and microspectrophotometry logic to match trace evidence to suspects.`,
    technicalDetails: [
      'Methodology: 12-point friction ridge matching',
      'Analysis: Microspectrophotometer spectral patterns',
      'Anatomy: Canine dental impression comparison',
      'Logic: Means, Motive, and Opportunity analysis'
    ],
    results: `Successfully identified the 'culprit' using irrefutable evidence patterns. Demonstrated 12 matching points of minutiae in paw-print analysis.`,
    lessons: ['Trace evidence is often invisible but scientifically definitive.', 'Technical storytelling bridges the gap between science and public understanding.'],
    futureWork: `Expanding the simulation to include digital forensics and network analysis.`,
    specs: {
      "Standard": "12-Point Matching",
      "Principles": "Locard's Exchange",
      "Analysis": "Comparison Microscopy",
      "Documentation": "Week-by-Week Scripting"
    }
  },
  {
    id: 3,
    slug: 'force-green-robotics',
    title: 'Force Green Robotics (FTC 10265)',
    description: 'Lead technical contributor and Team REV brand ambassador for a high-performance FIRST Tech Challenge team.',
    image: '/images/image.jpg',
    tags: ['Robotics', 'FTC', 'Leadership', 'Mechanical Design'],
    date: '2025-2026 Season',
    duration: 'Ongoing',
    cost: 'N/A',
    featured: true,
    github: 'https://github.com/yourusername/force-green',
    problem: `Maintaining technical excellence and community outreach in a highly competitive robotics environment.`,
    approach: `Leading robot design recaps, prototyping videos, and technical resource sharing within the FIRST community.`,
    technicalDetails: [
      'Platform: REV Robotics Ecosystem',
      'CAD: Advanced Part/Assembly Modeling',
      'Mentorship: FLL/FTC Peer Mentoring',
      'Documentation: Build Blogs & Reveal Prep'
    ],
    results: `Secured official Team REV sponsorship. Achieved high-level community engagement through workshops and resource sharing.`,
    lessons: ['Engineering is 50% technical and 50% communication.', 'Sponsorship management requires consistent brand representation.'],
    futureWork: `Finalizing the 2026 competition robot and preparing for state-level qualifiers.`
  },
  {
    id: 4,
    slug: 'prosthetic-hand',
    title: 'EMG-Controlled Prosthetic Hand',
    description: 'An open-source, affordable prosthetic hand prototype controlled by muscle signals via Arduino.',
    image: '/images/image.jpg',
    tags: ['Biomedical', 'Arduino', 'EMG', '3D Printing'],
    date: 'January 2024',
    duration: '8 weeks',
    cost: '$180',
    featured: false,
    github: 'https://github.com/yourusername/prosthetic-hand',
    problem: `High-cost prosthetics ($20k+) are inaccessible. Affordable alternatives lack intuitive control.`,
    approach: `Low-cost EMG sensing and servo-actuated finger mechanics using PETG 3D prints.`,
    technicalDetails: [
      'Microcontroller: Arduino Nano',
      'Sensors: MyoWare EMG Array',
      'Actuators: High-Torque Servos',
      'Material: PETG (Impact Resistant)'
    ],
    results: `85% accuracy in basic grasp patterns. 6+ hour battery life.`,
    lessons: ['Sensor placement is anatomical, not just electrical.', 'User comfort depends on weight distribution, not just power.'],
    specs: {
      "Grip Force": "12N",
      "Response": "<150ms",
      "Weight": "420g",
      "Control": "Arduino"
    },
    gallery: [
      '/images/projects/prosthetic-hand.jpg',
      '/images/projects/robotics-kit.jpg',
      '/images/projects/prosthetic-hand.jpg'
    ],
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 5,
    slug: 'solar-field-charger',
    title: 'Portable Solar Field Charger',
    description: 'A rugged, high-efficiency energy harvesting system for off-grid fieldwork and emergency charging.',
    image: '/images/image.jpg',
    tags: ['Renewable Energy', 'Electronics', 'Rugged Design'],
    date: 'December 2024',
    duration: '5 weeks',
    cost: '$120',
    featured: false,
    github: 'https://github.com/yourusername/solar-charger',
    problem: `Researchers need reliable power in harsh environments where commercial banks are too fragile.`,
    approach: `Folding 40W monocrystalline system with integrated MPPT logic and shock-resistant 3D printed housing.`,
    technicalDetails: [
      'Logic: MPPT (Maximum Power Point Tracking)',
      'Cells: 22% Efficiency Monocrystalline',
      'Protection: Overcharge & Thermal Cutoff',
      'Output: Dual USB-C PD (60W max)'
    ],
    results: `Maintained 100% laptop charge over 12 hours of continuous usage in direct sunlight.`,
    lessons: ['Thermal management of MPPT controllers is vital in field conditions.', 'Aluminum heat sinks significantly prolong component life.'],
    specs: {
      "Peak Power": "40W",
      "Efficiency": "96%",
      "Output": "USB-C PD",
      "Weight": "1.2kg"
    },
    collaboration: {
      active: false,
      role: "Mechanical Ruggedization",
      description: "Seeking feedback on the folding hinge mechanism to ensure it can withstand 1000+ cycles in sandy environments."
    }
  },
  {
    id: 6,
    slug: 'steam-robotics-kit',
    title: 'Educational Robotics Kit',
    description: 'Modular robotics platform designed for K-12 STEAM workshops, teaching programming and engineering concepts.',
    image: '/images/image.jpg',
    tags: ['Python', 'Robotics', 'Education', 'Raspberry Pi'],
    date: 'September 2023',
    duration: '6 weeks',
    cost: '$65',
    featured: false,
    github: 'https://github.com/yourusername/steam-kit',
    problem: `Teaching robotics in schools is often expensive and uses "black-box" kits that don't show students how engineering works.`,
    approach: `Created a modular kit using a Raspberry Pi Pico and 3D printed components that can be assembled in under an hour.`,
    technicalDetails: [
      'Controller: Raspberry Pi Pico W',
      'Programming: MicroPython',
      'Power: 4x AA Rechargeable Batteries',
      'Chassis: Modular 3D printed frame'
    ],
    results: `Pilot tested with 2 middle school workshops (45 students). Kit cost was 60% lower than commercial alternatives.`,
    lessons: ['Durability is more important than precision for kids.', 'Clearer assembly diagrams saved a lot of questions.'],
    gallery: [
      '/images/projects/robotics-kit.jpg',
      '/images/projects/prosthetic-hand.jpg',
      '/images/projects/robotics-kit.jpg'
    ]
  },
  {
    id: 7,
    slug: 'smart-irrigation-system',
    title: 'IoT Smart Irrigation System',
    description: 'An automated plant watering system that uses soil moisture sensors and weather data to optimize water usage.',
    image: '/images/image.jpg',
    tags: ['IoT', 'ESP32', 'Sensors', 'Web App'],
    date: 'July 2024',
    duration: '4 weeks',
    cost: '$45',
    featured: false,
    github: 'https://github.com/yourusername/smart-irrigation',
    problem: `Traditional irrigation systems waste water during rain or over-watering when soil is already saturated.`,
    approach: `Closed-loop control using ESP32 that reads capacitive sensors and fetches weather forecasts to trigger pumps only when needed.`,
    technicalDetails: [
      'Microcontroller: ESP32-WROOM-32',
      'Sensors: Capacitive Soil Moisture v1.2',
      'Communication: MQTT Protocol',
      'Dashboard: Node-RED'
    ],
    results: `Reduced water consumption by 40% compared to timer-based systems.`,
    lessons: ['Capacitive sensors are much more reliable than resistive ones.', 'Encapsulating electronics for waterproofing is critical.'],
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 8,
    slug: 'uv-sterilizer',
    title: 'Low-Cost UV-C Sterilization Box',
    description: 'A safety-first sterilization chamber designed for disinfecting small medical tools in low-resource settings.',
    image: '/images/image.jpg',
    tags: ['Biomedical', 'Optics', 'Safety', 'Arduino'],
    date: 'March 2024',
    duration: '3 weeks',
    cost: '$35',
    featured: false,
    github: 'https://github.com/yourusername/uv-sterilizer',
    problem: `Rural clinics lack access to expensive autoclaves for basic surface sterilization.`,
    approach: `Built a light-tight chamber using 254nm UV-C lamps with magnetic safety cutoffs and reflective lining.`,
    technicalDetails: [
      'Lamp: 11W G11T5 UV-C',
      'Safety: Magnetic Reed Switch',
      'Timer: Arduino Pro Mini',
      'Chassis: HDPE Box'
    ],
    results: `Achieved 50mJ/cm² dose in 5 minutes, sufficient for inactivating common pathogens.`,
    lessons: ['UV-C degrades plastics, requiring careful material selection.', 'Visual indicators are necessary for invisible radiation safety.']
  },
  {
    id: 9,
    slug: 'blind-hockey-puck',
    title: 'Adaptive Blind Hockey Puck: Inclusive Engineering',
    description: 'A modular, shock-resistant enclosure for blind hockey pucks, integrating active acoustic feedback for stationary tracking.',
    image: '/images/image.jpg',
    tags: ['Adaptive Sports', 'Haptics', 'ESP32', '3D Printing', 'CAD'],
    date: 'Summer 2025',
    duration: '12 Weeks',
    cost: 'N/A',
    featured: true,
    problem: `Blind hockey pucks are silent when stationary and easily damaged, making location tracking and training expensive and difficult.`,
    approach: `Developed a modular PLA/TPU shell to protect an ESP32-C3 microcontroller that triggers vibration-based acoustic feedback.`,
    technicalDetails: [
      'Microcontroller: Seeed Studio XIAO ESP32-C3',
      'Material: Hybrid PLA (Rigid) and TPU (Flexible)',
      'Feedback: Accelerometer-triggered coin vibration motors',
      'Connectivity: Wi-Fi remote control for coach-led drills'
    ],
    results: `Successfully prototyped a 'sacrificial' modular system that reduced maintenance costs to under $2 per impact failure.`,
    lessons: ['Focus on the majors in the majors.', 'Modular shell structures are superior for high-impact electronic protection.'],
    futureWork: `Integrating refined sonar patterns and ultra-wideband (UWB) for precise positioning.`,
    specs: {
      "Controller": "Seeed XIAO ESP32-C3",
      "Materials": "PLA & TPU",
      "Sensors": "Accelerometer",
      "Feedback": "Acoustic (Buzzing)"
      }
    },
    {
      id: 10,
      slug: 'synapse-haptic-band-v2',
      title: 'Synapse: Haptic Band (Venture Progression)',
      description: 'Expanding the haptic band from a technical prototype into a functional venture for the accessibility community.',
      image: '/images/image.jpg',
      tags: ['Entrepreneurship', 'Haptics', 'Pitching', 'Accessibility'],
      date: 'February 2026',
      duration: 'Ongoing',
      cost: 'N/A',
      featured: false,
      problem: `Moving beyond technical feasibility to solve real-world accessibility gaps for 37.5 million deaf and hard-of-hearing Americans.`,
      approach: `Conducted extensive user validation and competitive analysis to transition the prototype into a market-ready assistive device.`,
      technicalDetails: [
      'Generation: 5th generation functional prototype',
      'Connectivity: Wi-Fi/Bluetooth smartphone sync',
      'Research: Validated haptic patterns with users',
      'Strategy: Developed full Business Model Canvas'
      ],
      results: `Successfully pitched at Maryville University's Battle of the Saints competition, securing validation from industry judges.`,
      lessons: ['The story of impact is as important as the hardware specs.', 'Founding a venture requires a multidisciplinary approach beyond engineering.'],
      futureWork: `Developing clinical partnerships for pilot testing the device.`,
      specs: {
      "Iteration": "V5 Prototype",
      "Wireless": "BLE & Wi-Fi",
      "Validation": "User Interviews",
      "Model": "B2C / Accessibility"
      }
    },
    {
    id: 11,
    slug: 'synapse-haptic-band',
    title: 'Synapse: Haptic Band',
    description: 'A wearable silent alarm and notification system designed for heavy sleepers and the accessibility community.',
    image: '/images/image.jpg',
    tags: ['Wearables', 'Haptics', 'ESP32', 'Entrepreneurship', 'Accessibility'],
    date: 'October 2025',
    duration: 'Ongoing',
    cost: 'N/A',
    featured: true,
    problem: `80% of people struggle to wake up consistently with sound-based alarms, and for the deaf community, auditory alerts are completely inaccessible.`,
    approach: `Developed 5 generations of prototypes using the ESP32-C3 to translate digital alerts into unmistakable haptic patterns on the wrist.`,
    technicalDetails: [
      'Microcontroller: Seeed Studio XIAO ESP32-C3',
      'Connectivity: Wi-Fi and Bluetooth (BLE)',
      'Feedback: Calibrated coin vibration motors',
      'Integration: Syncs with smartphone and smart home safety systems'
    ],
    results: `Pitched at Maryville University's Battle of the Saints and validated with user research from the deaf and hard-of-hearing community.`,
    lessons: ['Technology only matters when it advocates for people.', 'Hardware is only 50% of a startup venture.'],
    futureWork: `Developing an open-source EMG control module for the next generation of the device.`,
    specs: {
      "Controller": "Seeed XIAO ESP32-C3",
      "Wireless": "Wi-Fi & BLE",
      "Power": "LiPo Rechargeable",
      "Interface": "Mobile App Sync"
    }
  }
];
