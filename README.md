3D Software Renderer from Scratch

A lightweight 3D graphics engine built using Pure JavaScript and the HTML5 Canvas API. This project was created as a personal challenge to understand the fundamental mathematics of 3D rendering without the use of external libraries like Three.js or WebGL.
🚀 Overview

This engine takes a set of 3D vertices (x,y,z) and passes them through a custom transformation pipeline to render a rotating, wireframe object on a 2D screen.
The Transformation Pipeline

    Model Space: Define vertices relative to the object's center.

    Rotation: Apply Euler angle rotations using Sine and Cosine functions on the XZ and YZ planes.

    Z-Offset: Translate the object along the Z-axis to prevent "camera" clipping.

    Perspective Projection: Calculate the 2D projection using the formula:
    x′=x/z​,y′=y/z​

    Viewport Mapping: Map the normalized coordinates (−1 to 1) to the actual pixel dimensions of the HTML Canvas.

🛠️ Built With

    JavaScript (ES6+)

    HTML5 Canvas

    Linear Algebra & Trigonometry

📖 Key Features

    Custom 3D Math: No matrix libraries. All rotation and projection logic is written from scratch.

    Wireframe Rendering: Uses a custom Face/Edge array (fs) to define object topology.

    Dual-Axis Rotation: Simultaneous rotation on multiple axes for a realistic 3D tumbling effect.

    Responsive Coordinate System: A custom translate() function that ensures (0,0) is always the center of the canvas, regardless of screen size.

🏃 How to Run

    Clone the repository:
    Bash

    git clone https://github.com/AhmedMovla/JS_graphic.git

    Open index.html in any modern web browser.
