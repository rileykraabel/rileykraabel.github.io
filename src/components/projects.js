/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import project1Img from '../assets/portfolio-home.png';
import airpowerracing from '../assets/airpowerracing-site.png';
import webdev2 from '../assets/welcome-1.png';
import webdev1 from '../assets/3550-1.png';
import dbsystems from '../assets/db-lms.png';
import mobileapp from '../assets/mobile-app.png';
import cookinggame from '../assets/cooking-game.png';
import spreadsheet from '../assets/spreadsheet.png';
import agario from '../assets/agario.png';

// store the universal 'projects' list for the 'projects' page //
const projects = [
  {
    title: 'PORTFOLIO WEBSITE',
    dates: 'June 2025',
    description: "You're already here! My personal portfolio site, built using React and CSS, and deployed to GitHub Pages using Git. I wanted to incorporate more of my own personal touch into this project, and hope you enjoy it!",
    image: project1Img,
    link: 'https://www.rileykraabel.github.io/',
    id: 'portfolio',
  },
  {
    title: 'AIR POWER RACING',
    dates: 'Planning: Fall 2024 Implementation: Spring 2025',
    description: 'My capstone project; a custom site built using Bubble.io for a local Salt Lake City company, Air Power Racing. I worked on the database implementation along with front to back end integration. This project was created with a team of 3 other students.',
    image: airpowerracing,
    link: 'https://www.airpowerracing.com',
    id: 'apr',
  },
  {
    title: 'CHAT APPLICATION',
    dates: 'Spring 2024',
    description: 'My second web programming course required us to create a custom, full-stack chat application using React, Swagger, and Python FastAPI. Users are able to send/receive messages from other authenticated users, and manage chat features as an admin.',
    image: webdev2,
    link: 'https://github.com/rileykraabel/chat-app-project',
    id: 'chat-app',
  },
  {
    title: 'CUSTOM LMS DATABASE',
    dates: 'Spring 2024',
    description: 'For my Database Systems course, a partner and I designed and implemented a relational database system consisting of 10+ interconnected tables. From there, we connected the MySQL database to a simple, course-provided frontend application using C#, LINQ, and .NET Core.',
    image: dbsystems,
    link: 'https://github.com/rileykraabel/custom-db',
    id: 'custom-db',
  },
  {
    title: 'MOBILE DRAWING APP',
    dates: 'Spring 2024',
    description: 'With a group of 2 other students, we implemented an Android / Kotlin mobile app that allowed users to log-in, update previous drawings, and create / store new ones using Google Firebase. We implemented a variety of visual effects and features, and ensured drawing states were maintained throughout the process.',
    image: mobileapp,
    link: 'https://github.com/rileykraabel/mobileapp-project',
    id: 'mobile-app',
  },
  {
    title: 'CANVAS / LMS DUPE',
    dates: 'Fall 2023',
    description: 'My introductory web programming course involved creating a Canvas "dupe" LMS by using a Django backend, and using HTML / CSS for front-end styling. The project was mainly to practice using basic elements, and included functionalities such as grading assignments, role-based management, and submissions.',
    image: webdev1,
    link: 'https://github.com/rileykraabel/lms-app',
    id: 'canvas-dupe',
  },
  {
    title: '2D COOKING GAME',
    dates: 'Fall 2023',
    description: 'Implemented with a team of 5 other students, we created a custom educational game using C++. We incorporated a Box2D physics engine into the game to enhance the user experience and make the process seem more natural / realistic. Our objective was to encourage college students to create their own healthy meals in the dorms.',
    image: cookinggame,
    link: 'https://github.com/rileykraabel/cooking-game',
    id: 'cooking-game',
  },
  {
    title: 'AGAR.IO GAME',
    dates: 'Spring 2023',
    description: 'This Agar.io dupe game was implemented by a partner and I over the span of about 2 months. This project aimed to practice logging, TCP and socket connections, and C# / .NET MAUI skills. Users can move their character (circle-shaped) around the map, and it consumes other circles to grow larger when it comes in contact with them. We no longer have access to the server side of this application, so images cannot be shown of actual game-play.',
    image: agario,
    link: 'https://github.com/rileykraabel/agario',
    id: 'agario-game'
  },
  {
    title: 'SPREADSHEET',
    dates: 'Spring 2023',
    description: 'I implemented a custom spreadsheet with Excel / Sheets functionalities. Languages and libraries used to bring this project to life included C#, .NET Core, and .NET MAUI. The main objective of this assignment was to understand functional dependencies and practice building software in phases.',
    image: spreadsheet,
    link: 'https://github.com/rileykraabel/spreadsheet',
    id: 'spreadsheet'
  }
  
];

export default projects;