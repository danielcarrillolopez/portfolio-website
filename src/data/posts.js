export const posts = [
  {
    id: 1,
    slug: 'why-failure-is-essential-in-robotics',
    title: 'Why Failure is Essential in Robotics Engineering',
    excerpt: 'Exploring how three failed prototypes led to my most successful assistive technology design.',
    date: 'February 15, 2024',
    category: 'Engineering Insights',
    readTime: '5 min read',
    image: '/images/projects/prosthetic-hand.jpg',
    tags: ['Robotics', 'Design Process', 'Career Insight'],
    visible: true,
    content: `
In robotics, your first design is almost always wrong. This post explores my experience building 
the EMG-controlled prosthetic hand and why the "fail fast" mentality saved months of work.

## The First Prototype: Over-Engineering
My initial design was bulky, heavy, and attempted to solve every problem at once. The sensors were inconsistent because I hadn't accounted for the anatomical variability of muscle signals.

## The Turning Point: Simplicity
By the third iteration, I stopped trying to make it "perfect" and started focusing on making it "repairable." This shift in mindset changed everything. I realized that for an assistive device, **reliability outweighs features.**

## Lessons Learned for Aspiring Engineers
1. **Weight is critical:** It's more important than raw power for the end user.
2. **Anatomical Precision:** Sensor placement requires careful study of muscle groups, not just electrical connectivity.
3. **Fail Fast:** Identifying a fatal design flaw in week 2 is better than in week 8.
    `
  },
  {
    id: 2,
    slug: 'getting-started-with-arduino-sensors',
    title: 'A Practical Guide to Arduino Sensor Integration',
    excerpt: 'Tips and tricks for reading clean data from noisy environmental sensors.',
    date: 'January 10, 2024',
    category: 'Tutorials',
    readTime: '8 min read',
    image: '/images/projects/robotics-kit.jpg',
    tags: ['Arduino', 'Electronics', 'Sensors', 'Tutorial'],
    visible: true,
    content: `
When working with low-cost sensors, noise is your biggest enemy. Here is how I handle it 
using simple moving average filters in C++.

### The Problem with Raw Data
Raw sensor data often "jitters" due to electromagnetic interference, slight power fluctuations, or the inherent limitations of the sensor hardware. If you're building a control system, this noise can lead to erratic behavior.

### The Solution: Software Filtering
A simple moving average can smooth out these spikes without requiring significant processing power from a small microcontroller like the Arduino Nano.

\`\`\`cpp
// A Simple 10-sample Moving Average Filter
float getFilteredValue(int newValue) {
  static int values[10];
  static int index = 0;
  static int count = 0;
  static long sum = 0;

  sum -= values[index];
  values[index] = newValue;
  sum += values[index];
  
  index = (index + 1) % 10;
  if (count < 10) count++;
  
  return (float)sum / count;
}
\`\`\`

### Hardware Tips
Don't forget the physical side: always include a **decoupling capacitor** (usually 0.1μF) close to the sensor's power pins to filter out high-frequency power supply noise.
    `
  },
  {
    id: 3,
    slug: 'the-future-of-low-cost-prosthetics',
    title: 'The Future of Low-Cost Prosthetics',
    excerpt: 'How 3D printing and open-source hardware are disrupting the medical device industry.',
    date: 'March 20, 2024',
    category: 'Bio-Engineering',
    readTime: '6 min read',
    image: '/images/projects/prosthetic-hand.jpg',
    tags: ['Biomedical', '3D Printing', 'Open Source', 'Design Process'],
    visible: true,
    content: `
The medical device industry is undergoing a massive shift. High-end prosthetics can cost as much as a luxury car, but a new wave of engineers is using "off-the-shelf" technology to bring costs down by 99%.

## The Role of 3D Printing
Traditional manufacturing requires expensive molds and tooling. 3D printing (FDM and SLA) allows for **personalized geometry** at zero extra cost. If a user needs a slightly wider palm or a specific grip pattern, it's just a change in the CAD file.

## Open Source Hardware
Projects like *e-NABLE* have shown that when designs are shared freely, the rate of iteration skyrockets. A designer in New York can fix a mechanical bug found by a user in Brazil within hours.

## Technical Challenges Remaining
While cost is coming down, we still face hurdles in:
- **Battery Density:** Making hands that last 24+ hours on a single charge.
- **Haptic Feedback:** Giving the user the "sense of touch."
- **Durability:** Ensuring 3D printed plastics can survive the rigors of daily life.
    `
  },
  {
    id: 4,
    slug: 'optimizing-cad-for-3d-printing',
    title: 'Optimizing CAD for 3D Printing: A Masterclass',
    excerpt: 'Mastering overhangs, tolerances, and orientation to ensure your designs print perfectly every time.',
    date: 'April 05, 2024',
    category: 'Design Guide',
    readTime: '10 min read',
    image: '/images/projects/robotics-kit.jpg',
    tags: ['CAD', '3D Printing', 'Design Process', 'Tutorial'],
    visible: true,
    content: `
Designing for 3D printing is fundamentally different from designing for injection molding or machining. Here are the core principles I follow in SolidWorks and Fusion 360.

### 1. The 45-Degree Rule
To avoid messy support structures, design your overhangs at an angle of 45 degrees or less. This allows the printer to "step" outward using the previous layer as a foundation.

### 2. Holes and Tolerances
3D printers tend to "squish" plastic slightly inward. If you need a 5mm bolt to fit, design your hole at **5.2mm**. This 0.2mm "offset" is the industry standard for most FDM printers.

### 3. Strength and Orientation
Remember that 3D prints are like wood: they have a grain. They are weakest along the layer lines (the Z-axis). Always orient your part so that the primary stresses are applied **along** the layers, not pulling them apart.

### Summary
By thinking about the manufacturing process during the design phase (DFM), you save hours of failed prints and wasted material.
    `
  }
];
