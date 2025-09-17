import { useState } from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-black/20 fixed w-full top-0 left-0 z-50 border-b border-[#DAC5A7]/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#DAC5A7] tracking-wide font-mono">
          gulnur.dev
        </h1>

        <ul className="hidden md:flex space-x-8 text-[#DAC5A7] font-medium">
          <li><Link to="/about" className="hover:text-white transition">About</Link></li>
          <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
        </ul>

        <button 
          className="md:hidden text-[#DAC5A7] text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-black/95 text-[#DAC5A7] px-6 py-6 space-y-6 text-lg font-medium shadow-lg">
          <li><Link to="/about" className="block hover:text-white transition">About</Link></li>
          <li><Link to="/projects" className="block hover:text-white transition">Projects</Link></li>
          <li><Link to="/contact" className="block hover:text-white transition">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
