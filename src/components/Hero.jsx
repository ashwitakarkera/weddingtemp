// Hero.jsx
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--wine)] p-2 sm:p-4 md:p-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[95%] lg:max-w-6xl bg-[var(--ivory)] py-12 sm:py-20 px-4 sm:px-10 md:px-16 border-2 border-[var(--wine)] flex flex-col justify-center min-h-[90vh] sm:min-h-0"
      >
        {/* NAVBAR (unchanged) */}
       <div className="flex justify-center">
       <Navbar />
        </div>

        {/* HERO CONTENT */}
        <section className="text-center text-[var(--wine)] py-6 sm:py-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-vin text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none"
          >
            Rhea
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-vin italic text-2xl sm:text-4xl md:text-5xl my-4 sm:my-6 opacity-80"
          >
            and
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-vin text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none"
          >
            Aditya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="font-vin text-xl sm:text-3xl md:text-4xl mt-10 sm:mt-14 font-medium italic"
          >
            are getting married
          </motion.p>
        </section>

        {/* DATE FOOTER */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-center text-[var(--wine)] text-xs sm:text-sm md:text-lg tracking-[0.4em] font-bold mt-12 sm:mt-20 font-vin"
        >
          19<sup className="text-[0.6em] ml-0.5">TH</sup> OCTOBER 2030
        </motion.footer>

        <CornerOrnaments />
      </motion.div>
    </section>
  );
}

function CornerOrnaments() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="pointer-events-none absolute inset-0"
    >
      <div className="absolute top-3 sm:top-6 inset-x-3 sm:inset-x-6 flex justify-between">
        <div className="h-8 w-8 sm:h-16 sm:w-16 border-l-2 border-t-2 border-[var(--wine)]/30" />
        <div className="h-8 w-8 sm:h-16 sm:w-16 border-r-2 border-t-2 border-[var(--wine)]/30" />
      </div>
      <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 flex justify-between">
        <div className="h-8 w-8 sm:h-16 sm:w-16 border-l-2 border-b-2 border-[var(--wine)]/30" />
        <div className="h-8 w-8 sm:h-16 sm:w-16 border-r-2 border-b-2 border-[var(--wine)]/30" />
      </div>
    </motion.div>
  );
}

