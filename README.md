# Abhay Gaikwad - DevOps Engineer Portfolio

A modern, responsive, and interactive portfolio website showcasing DevOps expertise, projects, and professional experience. Built with React, Tailwind CSS, and Framer Motion for smooth animations and engaging user experience.

## 🚀 Features

- **Hero Section**: Animated introduction with CTA buttons
- **About Me**: Professional summary and key highlights
- **Technical Skills**: Categorized skills in Cloud, CI/CD, Infrastructure, Security, Monitoring, and Programming
- **Projects**: Detailed project cards with architecture explanations and technologies
- **Experience Timeline**: Professional experience and education with certifications
- **Contact Section**: Multiple ways to get in touch
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Framer Motion animations on scroll and hover
- **Dark Theme**: Modern DevOps-inspired design with gradients and glowing effects

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.263.1
- **Build Tool**: Vite 4.4.5
- **Node.js Package Manager**: npm

## 📋 Prerequisites

- Node.js 14+ installed
- npm 6+ or yarn 7+

## ⚙️ Installation

1. **Clone the repository** (or navigate to the project directory)
```bash
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The development server will automatically open at `http://localhost:3000`

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with animations
│   │   ├── About.jsx         # About section
│   │   ├── Skills.jsx        # Technical skills
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Experience.jsx    # Experience timeline & education
│   │   ├── Contact.jsx       # Contact section
│   │   ├── Navbar.jsx        # Navigation bar
│   │   └── Footer.jsx        # Footer
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles & animations
├── index.html                # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `dark-primary`: Main background color
- `dark-secondary`: Secondary background
- `accent-blue`: Primary accent color
- `accent-purple`: Secondary accent color
- `accent-cyan`: Tertiary accent color

### Content
Update component files in `src/components/` to:
- Modify professional information in `Hero.jsx` and `About.jsx`
- Update skills in `Skills.jsx`
- Add/modify projects in `Projects.jsx`
- Update experience in `Experience.jsx`
- Change contact information in `Contact.jsx`

### Animations
Framer Motion animations are defined in component files. Modify animation variants to customize timing and effects.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### GitHub Pages
```bash
npm run build
# Push `dist/` folder to `gh-pages` branch
```

### Netlify
1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push

### AWS S3 + CloudFront (Recommended for DevOps Engineers)
```bash
# Build the project
npm run build

# Upload dist folder to S3
aws s3 sync dist/ s3://your-bucket-name/

# Create CloudFront distribution pointing to S3
# Update Route 53 for custom domain
```

## 📄 Resume

Place your resume PDF as `resume.pdf` in the public directory (create if needed).

## 👤 Contact Information

- **Email**: gaikwadabhay869@gmail.com
- **Phone**: +91 8483857098
- **LinkedIn**: linkedin.com/in/gaikwad-abhay
- **Location**: Nashik, Maharashtra, India

## 📝 License

© 2024 Abhay Gaikwad. All rights reserved.

## 🤝 Contributing

Feel free to use this template for your own portfolio. If you make improvements, feel free to share them!

## 🎯 Future Enhancements

- [ ] Blog section for DevOps articles
- [ ] Project filtering by technology
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Newsletter subscription
- [ ] Achievement badges/stats
- [ ] Case studies for projects

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
