/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import project1Img from '../assets/portfolio-home.png';
import airpowerracing from '../assets/airpowerracing-site.png';
import webdev2 from '../assets/welcome-1.png';
import webdev1 from '../assets/3550-1.png';
import dbsystems from '../assets/db-lms.png';

// store the universal 'projects' list for the 'projects' page //
const projects = [
  {
    title: 'PORTFOLIO WEBSITE',
    dates: 'June 2025',
    description: "You're already here! My personal portfolio site, built using React and CSS...",
    image: project1Img,
    link: 'https://www.rileykraabel.github.io/',
    id: 'portfolio',
  },
  {
    title: 'AIR POWER RACING',
    dates: 'Planning: Fall 2024 Implementation: Spring 2025',
    description: 'My capstone project; a custom site built using Bubble.io...',
    image: airpowerracing,
    link: 'https://www.airpowerracing.com',
    id: 'apr',
  },
  {
    title: 'CHAT APPLICATION',
    dates: 'Spring 2024',
    description: 'A full-stack chat app built with React, Swagger, and FastAPI...',
    image: webdev2,
    link: 'https://github.com/rileykraabel/chat-app-project',
    id: 'chat-app',
  },
  {
    title: 'CUSTOM LMS DATABASE',
    dates: 'Spring 2024',
    description: 'Relational DB with 10+ tables, connected to a frontend with C# + LINQ...',
    image: dbsystems,
    link: 'https://github.com/rileykraabel/custom-db',
    id: 'custom-db',
  },
  {
    title: 'CANVAS / LMS DUPE',
    dates: 'Fall 2023',
    description: 'A simplified LMS built with Django and HTML/CSS for practice...',
    image: webdev1,
    link: 'https://github.com/rileykraabel/lms-app',
    id: 'canvas-dupe',
  },

  // tbd: add more 
  
];

export default projects;