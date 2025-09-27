import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar appears on every page */}
      <NavBar />

      {/* Page content goes here */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Footer appears on every page */}
      <Footer /> 
    </div>
  );
}