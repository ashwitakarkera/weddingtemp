import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full mb-6 sm:mb-10 relative">
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="sm:hidden fixed top-0 left-0 w-full z-50">
        {/* Wine Bar */}
        <div className="bg-[var(--wine)] h-10 flex items-center justify-center relative">
          {/* Couple Name Center */}
          <span className="text-white font-vin uppercase tracking-[0.3em] text-[10px]">
            Rhea & Aditya
          </span>

          {/* Hamburger Icon Top Right */}
          <button
            className="absolute right-4 text-white focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <nav className=" bg-white/95 backdrop-blur-md shadow-lg flex flex-col gap-4 text-center text-[var(--wine)] text-xs tracking-[0.25em] font-vin uppercase py-6">
            <a href="#invite" onClick={() => setOpen(false)}>Invited</a>
            <a href="#gallery" onClick={() => setOpen(false)}>Moments</a>
            <a href="#journey" onClick={() => setOpen(false)}>Journey</a>
            <a href="#events" onClick={() => setOpen(false)}>Events</a>
            <a href="#venue" onClick={() => setOpen(false)}>Venue</a>
          </nav>
        )}
      </div>

      {/* ================= DESKTOP NAV (UNCHANGED) ================= */}
      <div className="hidden sm:flex justify-center">
        <nav className="flex gap-6 text-[var(--wine)] text-xs sm:text-sm md:text-base tracking-[0.3em] font-vin uppercase">
          <a href="#invite">Invited</a>
          <a href="#gallery">Moments</a>
          <a href="#journey">Journey</a>
          <a href="#events">Events</a>
          <a href="#venue">Venue</a>
        </nav>
      </div>
    </header>
  );
}



