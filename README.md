# Magic School Viewer

This is an Angular frontend project that fetches and displays information about magic schools from the Dungeons & Dragons API. Each magic school is represented as a card, and you can see the description of each school by hovering over the card.

## Features

- Fetches data from the [5e API](https://www.dnd5eapi.co/docs/)
- Displays magic schools in a responsive card layout
- Hover over the cards to flip and reveal more details
- Fully responsive: adapts to different screen sizes, with 4 cards in a row on larger screens, and adjusts to fewer on smaller screens.

## Technologies Used

- Angular
- Angular HttpClient
- CSS Grid for layout
- CSS 3D transforms for hover effects

## Demo

When you hover over a card, it flips to reveal the description of the magic school.

![Magic School Viewer](https://github.com/user-attachments/assets/8f941b7f-6b09-4248-b27e-702cbca9a795)

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>= v14)
- [Angular CLI](https://angular.io/cli) (>= 12)

### Steps

1. Clone the repository:
   ```bash
    git clone https://github.com/your-username/magic-school-viewer.git
    cd magic-school-viewer
2. Install the dependencies:
   ```bash
    Copy code
    npm install
3. Run the development server:
   ```bash
    Copy code
    ng serve
    The app will be running at http://localhost:4200/.

```
src/
│
├── app/
│   ├── D&D/
│   │   └── magic-school/
│   │       ├── magic-school.component.ts  # Fetches and displays magic schools
│   │       ├── magic-school.component.html  # The card layout
│   │       ├── magic-school.component.scss  # Styling for the cards
│   │       └── magic-school.module.ts  # Module for the MagicSchool component
│   ├── app.component.ts  # Main App component
│   ├── app.routes.ts  # Routes configuration
│   └── app.config.ts  # HTTP configuration
│
├── assets/  # Assets like icons, images, etc.
└── styles.scss  # Global styles
