---
title: "ThreeJS Particles - Galaxy"
category: "projects"
date: "01-12-2024"
image: "image/galaxy-thumb.jpg"
repo: "https://github.com/JaimieHemmings/galaxy-in-threejs"
liveSite: "https://heartfelt-blini-d6f507.netlify.app/"
tags: ["React", "ThreeJS"]
---

This morning, I set myself an exciting exercise to explore particle systems and animations. The goal? To create a rotating galaxy of particles with real-time controls, and to push my familiarity with Three.js to the next level.

## Setting Up the Galaxy

The idea was simple: use particles to simulate the structure of a galaxy and add a rotation animation to give it life. By working with particles, I was able to keep the render performance smooth and fluid, even with a large number of particles on screen.

I started by creating a particle geometry, filling it with points to represent stars. The particles were then scattered with slight randomness to give a realistic “spiral galaxy” effect. It was fascinating to see how little tweaks in spacing and scale could change the feel of the galaxy!

![3D Rendered Galaxy](/image/galaxy-body.webp)

## Adding Rotation Animation

Once the basic galaxy structure was in place, I added a rotation animation to simulate the spinning movement of a galaxy. With Three.js, setting up this effect was pretty straightforward. By adjusting the rotation properties of the entire particle system over time, I achieved the smooth, hypnotic rotation I was after. The rotation brought a sense of unity to the particles and made the galaxy come alive.
Incorporating a Debug GUI for Live Updates

I wanted to take things a step further by adding real-time customization options. To achieve this, I integrated a debug GUI (I used lil.gui) that allowed me to adjust parameters live within the application. This included options to tweak:

- Particle size
- Rotation speed
- Color
- Galaxy scale and distribution

## ThreeJS Particles - Building a galaxy

Having a GUI made it incredibly easy to experiment with different effects on the fly. I could watch as small changes in parameters dynamically altered the look and feel of the galaxy, helping me quickly iterate on my original design.
Key Takeaways from the Experiment

This project was a fantastic exercise in the power of Three.js and the versatility of particle systems. Some highlights and lessons learned:

- Particle systems are an efficient way to simulate large-scale visuals.
- Debugging with a live GUI significantly enhances the creative process, allowing real-time adjustments.
- Animation in Three.js is intuitive and opens up many creative possibilities for interactive projects.

If you're interested in getting into Three.js or simply exploring particle systems, I highly recommend trying a project like this. It’s both visually rewarding and a great way to build skills in 3D animation and live parameter updating.