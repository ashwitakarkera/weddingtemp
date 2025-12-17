import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["DATE", "OUR STORY", "DETAILS", "VENUE", "INVITED"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 1. MOBILE & TABLET FIXED NAVBAR (Visible only on < 640px) */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full h-16 bg-[var(--ivory)] border-b border-[var(--wine)]/10 z-[100] flex items-center px-6 sm:hidden shadow-sm"
      >
        <button
          onClick={toggleMenu}
          className="relative z-[120] text-[var(--wine)] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5 flex flex-col items-start">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 bg-[var(--wine)]"
            ></motion.span>
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-[var(--wine)]" 
            ></motion.span>
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 bg-[var(--wine)]"
            ></motion.span>
          </div>
        </button>
        
        {/* Mobile Header Text */}
        <span className="ml-4 font-vin font-bold text-[var(--wine)] tracking-widest text-sm uppercase opacity-60">
          Menu
        </span>
      </motion.nav>

      {/* 2. DESKTOP NAVBAR (Centered, Non-fixed, Visible only on sm screens and up) */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="hidden sm:flex w-full justify-center mb-16 z-50 font-vin pt-8"
      >
        <ul className="flex flex-wrap justify-center items-center gap-x-8 md:gap-14 text-[var(--wine)] text-[11px] md:text-xs tracking-[0.4em] uppercase font-bold text-center">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* 3. SHARED MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 z-[105]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-[var(--ivory)] z-[110] flex flex-col items-center justify-center shadow-2xl border-r border-[var(--wine)]/10 font-vin"
            >
              <ul className="flex flex-col items-center gap-y-10 text-[var(--wine)] text-2xl tracking-[0.3em] uppercase font-bold">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      onClick={() => setIsOpen(false)}
                      className="hover:opacity-40 transition-opacity"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}