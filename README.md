# Maxwell Kimoi | Full-Stack Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite, showcasing professional web development projects and skills.

## Overview

This portfolio demonstrates production-level quality with a focus on performance, accessibility, and user experience. The application features smooth animations, dark/light theme toggle, and a fully functional contact form integrated with email delivery.

## Features

- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Dark/Light Theme**: Seamless theme switching with persistent preference
- **Smooth Animations**: Built with Framer Motion for fluid page transitions and micro-interactions
- **Accessible Navigation**: ARIA-compliant mobile menu with keyboard navigation support
- **Functional Contact Form**:
  - Real-time validation
  - Email delivery via Resend API and Supabase Edge Functions
  - Loading states and error handling
- **Type-Safe**: Full TypeScript implementation
- **Testing Suite**: Comprehensive tests with Vitest and React Testing Library
- **Code Quality**: ESLint and Prettier configured for consistent code style

## Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- 
### Development Tools
- **Vitest** - Unit and integration testing
- **React Testing Library** - Component testing utilities
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Installation Steps

### Prerequisites
- Node.js 18+ and npm

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Testing

Run the test suite:

```bash
npm test
```

Run tests with UI:

```bash
npm run test:ui
```

Generate coverage report:

```bash
npm run test:coverage
```

### Test Coverage

The project includes tests for:
- Navbar component (menu toggle, accessibility, keyboard navigation)
- Contact form (validation, submission, error handling)
- Home page rendering
- Core functionality and user interactions

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Generate test coverage

## Deployment Instructions (Vercel)

### Quick Deploy

1. Push your code to GitHub

2. Import to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
3. Deploy

### Build Configuration

Vercel will automatically detect Vite and use these settings:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Custom Domain

After deployment, you can add a custom domain in Vercel Dashboard > Domains.

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── test/             # Test files
│   ├── assets/           # Images and static files
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
└── ...config files
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Code splitting with React.lazy
- Optimized animations with Framer Motion
- Tailwind CSS purging for minimal bundle size
- Image optimization
- Lazy loading for routes

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Color contrast compliance

## License

MIT License - feel free to use this project as a template for your own portfolio.

## Contact

For questions or inquiries, use the contact form on the website or reach out via:
- Email: maxwell@example.com
- LinkedIn: [Maxwell Kimoi](https://linkedin.com/in/maxwellkimoi)
- GitHub: [maxwellkimoi](https://github.com/Keymoye)

---

Built with passion by Maxwell Kimoi
