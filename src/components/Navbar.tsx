import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-md">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#home"><img src="/logo.svg" alt="GDG" className="h-5 w-auto" /></a>
          <span className="font-pt-sans-400 text-[#868686] dark:text-gray-400">GDG RCOEM</span>
        </div>

        <ul className="hidden sm:flex items-center gap-6 text-sm">
          <li><a href="#home" className="hover:text-brand-blue text-[#868686] dark:text-gray-300">Home</a></li>
          <li><a href="#events" className="hover:text-brand-blue text-[#868686] dark:text-gray-300">Events</a></li>
          <li><a href="#team" className="hover:text-brand-blue text-[#868686] dark:text-gray-300">Team</a></li>
          <li><a href="#alumni" className="hover:text-brand-blue text-[#868686] dark:text-gray-300">Alumni</a></li>
          <li><a href="#contact" className="hover:text-brand-blue text-[#868686] dark:text-gray-300">Contact</a></li>

          <li>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDark((d) => !d)}
              className="relative w-[84px] h-[35px] rounded-full bg-[#7A7A7A] dark:bg-gray-700 flex items-center px-1"
            >
              <motion.div
                animate={{ x: dark ? 52 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center"
              >
                {dark ? "🌙" : "☀️"}
              </motion.div>
            </button>
          </li>
        </ul>

        <button
          className="sm:hidden text-2xl text-gray-700 dark:text-gray-200"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white dark:bg-gray-900 shadow-md"
          >
            <ul className="flex flex-col items-center gap-4 py-4 text-sm">
              <li><a href="#home" className="hover:text-brand-blue text-[#868686] dark:text-gray-300" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#events" className="hover:text-brand-blue text-[#868686] dark:text-gray-300" onClick={() => setMenuOpen(false)}>Events</a></li>
              <li><a href="#team" className="hover:text-brand-blue text-[#868686] dark:text-gray-300" onClick={() => setMenuOpen(false)}>Team</a></li>
              <li><a href="#alumni" className="hover:text-brand-blue text-[#868686] dark:text-gray-300" onClick={() => setMenuOpen(false)}>Alumni</a></li>
              <li><a href="#contact" className="hover:text-brand-blue text-[#868686] dark:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</a></li>
              
              <li>
                <button
                  aria-label="Toggle dark mode"
                  onClick={() => setDark((d) => !d)}
                  className="relative w-[84px] h-[35px] rounded-full bg-[#7A7A7A] dark:bg-gray-700 flex items-center px-1"
                >
                  <motion.div
                    animate={{ x: dark ? 52 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center"
                  >
                    {dark ? "🌙" : "☀️"}
                  </motion.div>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}