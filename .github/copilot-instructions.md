# DevOps Portfolio - Copilot Instructions

This is a production-ready React portfolio website for a DevOps Engineer. Built with React, Tailwind CSS, and Framer Motion.

## Quick Start

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev` (opens at http://localhost:3000)
3. Build for production: `npm run build`

## Project Overview

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom dark theme
- **Animations**: Framer Motion
- **Components**: Modular, reusable React components
- **Responsive**: Mobile-first design, fully responsive

## Key Files

- `src/App.jsx` - Main component orchestrating all sections
- `src/components/` - Individual section components
- `src/index.css` - Global styles and custom animations
- `tailwind.config.js` - Theme configuration
- `vite.config.js` - Build configuration

## Customization Guide

### Update Contact Information
Edit `src/components/` files:
- Hero.jsx - Email, phone, social links
- Contact.jsx - All contact methods
- Footer.jsx - Social links

### Update Resume Content
- Hero.jsx - Title, summary
- About.jsx - Professional summary
- Skills.jsx - Technical skills by category
- Projects.jsx - Project details and achievements
- Experience.jsx - Job history and certifications

### Change Colors
Edit `tailwind.config.js`:
- dark-primary, dark-secondary, dark-tertiary
- accent-blue, accent-purple, accent-cyan

## Development Workflow

1. Make changes to components
2. Hot reload automatically on save
3. Test on mobile with browser DevTools
4. Build and preview: `npm run preview`

## Deployment Options

- GitHub Pages - Free hosting with GitHub
- Netlify - Automatic deployments from Git
- AWS S3 + CloudFront - Recommended for DevOps engineers (see README.md)

## Troubleshooting

- **Port 3000 in use**: Change port in `vite.config.js`
- **Styles not loading**: Check Tailwind config and CSS imports
- **Animations not working**: Ensure Framer Motion is installed

## Next Steps

1. Update all content with real information
2. Add resume PDF to public directory
3. Update GitHub and LinkedIn links
4. Test responsiveness on all devices
5. Optimize images (if adding any)
6. Deploy to preferred platform
