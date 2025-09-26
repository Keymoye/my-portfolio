import About from './pages/about.tsx'
import Contact from './pages/contact.tsx'
import Resume from './pages/resume.tsx'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<App/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
