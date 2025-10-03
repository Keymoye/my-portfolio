import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer';
import AnimatedBackground from './components/animated-background';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <NavBar />
      <main className="flex-1 relative z-10 mt-10 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
