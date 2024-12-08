---
title: "Feedback App with React"
category: "projects"
date: "07-12-2024"
image: "image/feedback-app.webp"
repo: "https://github.com/JaimieHemmings/review-demo"
liveSite: ""
tags: ["React", "Tailwind", "Typescript"]
---

## Building a React Feedback App with TypeScript, Tailwind CSS, and Framer Motion

### Introduction

In this blog post, I will walk you through the development of a React-based feedback application. This project was built to practice and enhance my skills in React, TypeScript, Tailwind CSS, and Framer Motion. The app allows users to view, add, and delete ratings, providing a simple yet interactive user experience.

### Project Overview

The React Feedback App is a straightforward application that showcases the power of modern web development technologies. It features a responsive design, smooth animations, and a user-friendly interface. The main functionalities include viewing predefined ratings, adding new ratings, and deleting existing ratings.

### Technologies Used

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Framer Motion: A library for creating animations in React.

### Key Features

- View Predefined Ratings: Users can see a list of predefined ratings displayed on the homepage.
- Add New Ratings: Users can add their own ratings through a simple form.
- Delete Existing Ratings: Users can delete ratings they no longer want to keep.
- Smooth Animations: Framer Motion is used to add smooth animations to the app, enhancing the user experience.
- Responsive Design: Tailwind CSS ensures that the app looks great on all devices.

### Development Process

#### Setting Up the Project

To get started, I used Vite to set up a new React project with TypeScript support. Vite is a fast build tool that provides a great development experience.

#### Creating Components

The app consists of several components, including Header, FeedbackList, FeedbackItem, FeedbackForm, and RatingSelect. Each component is responsible for a specific part of the application.

#### Styling with Tailwind CSS

Tailwind CSS was used to style the application. Its utility-first approach allowed me to quickly build a responsive and visually appealing UI.

I configured Tailwind CSS by adding the necessary configuration to the tailwind.config.js file and including the Tailwind directives in the index.css file.

#### Adding Animations with Framer Motion

Framer Motion was used to add animations to the app. For example, I used the AnimatePresence and motion components to animate the addition and removal of feedback items.

#### Managing State with useState

React's useState hook was used to manage the state of the feedback items. This allowed me to add, delete, and update feedback items dynamically.

#### TypeScript for Type Safety

TypeScript was used throughout the project to ensure type safety and catch potential errors early in the development process. I defined interfaces for the feedback items and props passed to components.

### Conclusion

The React Feedback App is a great example of how modern web development technologies can be combined to create a simple yet powerful application. By using React, TypeScript, Tailwind CSS, and Framer Motion, I was able to build a responsive, interactive, and visually appealing app.