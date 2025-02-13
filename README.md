# React Component and Basic Structure Assignment

Simple React application for learning component. This React project is organized using the following structure:

## Folder Structure

```
src/
├── app/pages
│   ├── index.jsx
│   ├── Offer.jsx
│   ├── Offer.css
│   ├── Profile.jsx
│   └── Profile.css
├── assets
│   ├── accessibility.svg
│   ├── blocks.svg
│   ├── cloud.svg
│   ├── react.svg
│   └── star.svg
├── components
│   ├── OfferCard.jsx
│   ├── OfferCard.css
│   ├── ProfileCard.jsx
│   └── ProfileCard.css
├── index.css
└── main.jsx

public/
.gitignore
.eslintrc.json
package.json
README.md
vite.config.js
```

## Description

This project is built using React with Vite as the build tool. It includes:

-   **Pages** (`app/pages`): Main pages like Offer and Profile.
-   **Components** (`components`): Reusable UI components like OfferCard and ProfileCard.
-   **Assets** (`assets`): SVG icons and images used in the UI.

## Features

-   Modular folder structure for scalability.
-   Reusable components for maintainability.
-   Raw CSS for custom styling.

## Installation

To set up the project, follow these steps:

```bash
npm install
```

## Running the Project

To start the development server, use:

```bash
npm run dev
```

## Build

To build the project for production, run:

```bash
npm run build
```

## Dependencies

-   React
-   Vite
