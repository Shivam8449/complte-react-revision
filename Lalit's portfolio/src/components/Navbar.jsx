import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl shadow-lg border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white tracking-widest whitespace-nowrap">
          Lalit<span className="text-purple-500">.Dev</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-12 items-center">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer text-white font-medium text-lg"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-purple-500 rounded-full group-hover:w-full transition-all duration-300"></span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-xl font-semibold text-white shadow-lg hover:shadow-purple-500/40 transition whitespace-nowrap"
        >
          Hire Me 🚀
        </button>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-white text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="md:hidden bg-black/90 py-6 border-t border-white/10"
        >
          <ul className="flex flex-col gap-6 text-center text-white text-xl font-semibold">
            {navLinks.map((link, i) => (
              <li
                key={i}
                onClick={() => scrollToSection(link.id)}
                className="cursor-pointer hover:text-purple-400 transition"
              >
                {link.name}
              </li>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-xl shadow-xl text-white mt-3"
            >
              Hire Me 🚀
            </button>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
