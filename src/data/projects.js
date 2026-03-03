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
    problem: `
      Teaching robotics in schools is often expensive and uses "black-box" kits
      that don't show students how the engineering actually works.
    `,
    approach: `
      I created a modular kit using a Raspberry Pi Pico and 3D printed components
      that can be assembled in under an hour. The focus is on:
      - Block-based and Python programming
      - Mechanical assembly transparency
      - Reusable and cheap components
    `,
    technicalDetails: [
      'Controller: Raspberry Pi Pico W',
      'Programming: MicroPython',
      'Power: 4x AA Rechargeable Batteries',
      'Chassis: Modular 3D printed frame',
      'Connectivity: Bluetooth & WiFi enabled'
    ],
    results: `
      Pilot tested with 2 middle school workshops (45 students total).
      Every group successfully completed the line-following challenge.
      Kit cost was 60% lower than the closest commercial alternative.
    `,
    lessons: [
      'Durability is more important than precision for kids',
      'Wire management was the biggest pain point - need better clips',
      'Clearer assembly diagrams saved a lot of "How does this go?" questions'
    ],
    futureWork: `
      Developing a mobile app for remote control and more advanced 
      sensor modules like ultrasonic and color sensors.
    `
  },
  {
    id: 3,
    slug: 'smart-irrigation-system',
    title: 'IoT Smart Irrigation System',
    description: 'An automated plant watering system that uses soil moisture sensors and weather data to optimize water usage.',
    image: '/images/projects/robotics-kit.jpg',
    tags: ['IoT', 'ESP32', 'Sensors', 'Web App'],
    date: 'July 2024',
    duration: '4 weeks',
    cost: '$45',
    featured: true,
    github: 'https://github.com/yourusername/smart-irrigation',
    problem: `
      Traditional irrigation systems follow strict timers, leading to significant water waste 
      during rain or over-watering when the soil is already saturated.
    `,
    approach: `
      I developed a closed-loop control system using an ESP32 microcontroller that:
      - Reads real-time moisture levels from capacitive sensors
      - Fetches local weather forecasts via OpenWeatherMap API
      - Only triggers the 5V water pump if both soil is dry and no rain is predicted
    `,
    technicalDetails: [
      'Microcontroller: ESP32-WROOM-32',
      'Sensors: Capacitive Soil Moisture Sensor v1.2',
      'Valve: 5V DC Submersible Pump',
      'Communication: MQTT Protocol for real-time monitoring',
      'Dashboard: Node-RED on Raspberry Pi'
    ],
    results: `
      The system reduced water consumption by 40% compared to a timer-based system 
      over a 30-day trial period. The plants maintained optimal growth with zero manual intervention.
    `,
    lessons: [
      'Capacitive sensors are much more reliable than resistive ones which corrode quickly',
      'Power management is key for battery-operated IoT devices - used deep sleep modes',
      'Encapsulating the electronics in a waterproof housing is harder than it looks'
    ],
    futureWork: `
      Adding a solar panel for complete energy independence and expanding the 
      system to support multiple independent zones.
    `
  },
  {
    id: 4,
    slug: 'uv-sterilizer',
    title: 'Low-Cost UV-C Sterilization Box',
    description: 'A safety-first sterilization chamber designed for disinfecting small medical tools in low-resource settings.',
    image: '/images/projects/prosthetic-hand.jpg',
    tags: ['Biomedical', 'Optics', 'Safety', 'Arduino'],
    date: 'March 2024',
    duration: '3 weeks',
    cost: '$35',
    featured: false,
    github: 'https://github.com/yourusername/uv-sterilizer',
    problem: `
      In rural clinics, access to autoclaves is limited. A cheaper alternative is needed 
      to provide basic surface sterilization for non-critical reusable tools.
    `,
    approach: `
      I built a light-tight chamber using 254nm UV-C lamps. The design focuses heavily on safety:
      - Magnetic reed switch to immediately cut power if the lid is opened
      - Reflective aluminum lining to ensure 360-degree coverage
      - Precise timer to ensure the required 99.9% germicidal dose
    `,
    technicalDetails: [
      'Lamp: 11W G11T5 UV-C Bulb',
      'Safety Switch: Magnetic Reed Sensor',
      'Timer: Arduino Pro Mini with OLED display',
      'Chassis: High-density polyethylene (HDPE) box',
      'Ballast: Electronic starter for UV lamps'
    ],
    results: `
      Tested with UVC-sensitive dosimeter cards, achieving a 50mJ/cm² dose in 5 minutes, 
      sufficient for inactivating most common pathogens.
    `,
    lessons: [
      'UV-C degrades many plastics; material choice is critical for longevity',
      'Standard glass blocks UV-C; used specialized quartz sleeves where necessary',
      'Visual indicators (LEDs) are necessary to tell when the invisible UV light is on'
    ],
    futureWork: `
      Implementing a more robust aluminum chassis for better thermal management 
      and seeking third-party microbiological validation.
    `
  }
];
