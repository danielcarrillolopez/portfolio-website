---
title: "The Major in the Majors: Engineering the Blind Hockey Puck"
date: "March 08, 2026"
excerpt: "A deep dive into my SLU internship, the modular shell iteration, and learning to listen to the user before the hardware."
category: "Engineering Insights"
readTime: "8 min read"
image: "/images/projects/robotics-kit.jpg"
tags: ["Inclusive Design", "Haptics", "Mentorship", "SLU"]
---

Today was one of those days where a single phrase from a mentor just sticks in your gears. While working back through my notes from the summer at **SLU’s CHROME Lab**, I kept coming back to what Dixie Baker and Jake Little told me: *"Focus on the majors in the majors and the minors in the minors."* At first, it sounded like standard corporate-speak, but as I sat there staring at a shattered 3D-printed puck enclosure, I realized it was the most practical engineering advice I’d ever received.

## The Cave in the Ice
I’ve always been inspired by the idea of building something from "a box of scraps," but the **Blind Ice Hockey** project felt like building for a ghost. Traditional pucks are these heavy metal shells filled with ball bearings. They’re loud when they move, but dead silent when they stop. For a blind player, a stationary puck is essentially invisible. My task wasn't just to make it make noise; it was to make it survive a slap-shot while doing so.

I realized that my initial designs were "majoring in the minors." I was so focused on the Wi-Fi connectivity and the remote-control interface that I hadn't fully accounted for the raw, kinetic violence of a hockey game. The first few enclosures I printed—pure PLA—just couldn't handle the shock. They would shatter, leaving the **ESP32-C3** exposed on the ice.

## The PLA/TPU Hybrid: A Modular Conversation
While working on the V4 iteration, a thought hit me: why does the shell have to be a single unit? I decided to move toward a **modular shell structure**. It was a conversation with the materials themselves. 
- **The PLA (Rigid):** This was the "armor" for the electronics.
- **The TPU (Flexible):** This was the "suspension" for the impact.

By combining them, I created a cage that could absorb the shockwaves of a stick strike while keeping the "brain" of the puck safe. It appears likely that this modularity is what finally cracked the code. If a section broke, we didn't have to scrap an $80 puck; we just swapped out a $2 module. It was economically sound and technically resilient.

## Learning to be Mentored
The most impactful part of the CHROME Lab wasn't the hardware, though. It was the shift in my own mindset. I’ve always been a "DIY" learner—organically picking up CAD or Python because *I needed to*. But at SLU, working one-on-one with **Jake Little** and under **Dr. Gorlewicz**, I had to learn the "soft" side of engineering: **User-Centered Design**.

I spent hours practicing my eye contact and refining my presentation style for my final internship recap. I realized that my technical skills (the "majors") wouldn't mean much if I couldn't communicate the "why" to the people I was actually trying to help. Nuance suggests that the players didn't care about my sonar logic; they cared about whether they could *hear* where the puck was during a fast break.

## Final Reflection
Looking back at my "Bed Notes" from that summer, I see the transition from an ambitious student to a disciplined researcher. I learned that you don't just engineer *for* a community; you engineer *with* them. The buzz of that coin-vibration motor isn't just white noise—it’s the sound of equity on the ice.

I’m still iterating. The system isn't perfect, but I’m no longer afraid to "major in the majors." Tonight, I’m looking at the next phase of **Synapse**, and I can hear Dixie’s voice in the back of my head, reminding me to keep the focus where it belongs.

---
*For inquiries regarding the original CAD files for the modular puck enclosure or collaboration on adaptive sports technology, please contact Daniel Carrillo directly.*
