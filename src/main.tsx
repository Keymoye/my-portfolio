import About from './pages/about.tsx'
import Contact from './pages/contact.tsx'
import Project from './pages/project.tsx';
import NotFound from './pages/notfound.tsx';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout.tsx';
import PageTransition from './components/page-transition.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<PageTransition><App/></PageTransition>} />
        <Route path="/about" element={<PageTransition><About/></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/project" element={<PageTransition><Project /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
