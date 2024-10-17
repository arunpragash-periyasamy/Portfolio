# Portfolio Website

This is a portfolio website developed using **React**, **Tailwind CSS**, and **Vite**. The project is built using **JavaScript + SWC (Speedy Web Compiler)** for optimized performance.

## Table of Contents

- [Installation](#installation)
- [Tailwind CSS Configuration](#tailwind-css-configuration)
- [Features](#features)
- [References](#references)

## Installation

To get started, follow these steps:

1. **Create a new Vite project**:

   `````bash
    npm create vite@latest
    cd portfolio
    npm install
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ````

    This will create a tailwind.config.js file. If it doesn’t, you can create it manually with the following content:

    /** @type {import('tailwindcss').Config} */
   export default {
   content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
   ],
   theme: {
    extend: {},
   },
   plugins: [],
   }


 ##  Tailwind CSS Configuration
  
   The tailwind.config.js file is already set up for this project. It ensures that Tailwind CSS works within all js and jsx files under the src directory, as well as the index.html file.


## Features
    Built with Vite for fast development and optimized builds using JavaScript + SWC.
    Styled using Tailwind CSS for rapid, modern design.
    Icons powered by react-icons.


## References
    Check out a similar portfolio: RyanCV Developer Portfolio.
