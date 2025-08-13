# CPR Vision Website

A modern React website for CPR Vision, showcasing CRM and loyalty solutions for hospitality and beauty brands.

## Features

- Modern React application with Vite
- Tailwind CSS for styling
- Framer Motion animations
- Lucide React icons
- Responsive design
- Contact form functionality

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   The app will automatically open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Project Structure

```
cprweb/
├── src/
│   ├── main.jsx          # App entry point
│   ├── App.jsx           # Main app component
│   ├── website.jsx       # Main website component
│   └── index.css         # Tailwind CSS imports
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # Tailwind configuration
```

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.