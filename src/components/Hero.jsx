import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--wine)] px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-6xl bg-[var(--ivory)] py-10 sm:py-14 px-6 sm:px-10 md:px-20 border border-[var(--wine)]"
      >

        {/* NAVBAR */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-10 sm:mb-14"
        >
          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-14 text-[var(--wine)] text-[10px] sm:text-xs tracking-[0.35em] uppercase font-bold text-center">
            {["DATE", "OUR STORY", "DETAILS", "VENUE", "FAQ"].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="relative hover:opacity-70 transition-opacity whitespace-nowrap"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* HERO CONTENT */}
        <section className="text-center text-[var(--wine)] py-10 sm:py-12 md:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-ger text-4xl sm:text-5xl md:text-7xl"
          >
            Rhea
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-script text-3xl sm:text-4xl md:text-5xl my-3 sm:my-4"
          >
            and
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="font-ger text-4xl sm:text-5xl md:text-7xl"
          >
            Aditya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="font-script text-xl sm:text-2xl md:text-3xl mt-8 sm:mt-10"
          >
            are getting married
          </motion.p>
        </section>

        {/* DATE */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-center text-[var(--wine)] text-[10px] sm:text-xs md:text-sm tracking-[0.3em] font-bold mt-10 sm:mt-12"
        >
          <span className="align-top text-[0.7em] mr-1">19</span>
          TH OCTOBER 2030
        </motion.footer>

        {/* CORNER ORNAMENTS */}
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
      <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex justify-between">
        <div className="h-10 w-10 sm:h-14 sm:w-14 border-l border-t border-[var(--wine)]" />
        <div className="h-10 w-10 sm:h-14 sm:w-14 border-r border-t border-[var(--wine)]" />
      </div>
      <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 flex justify-between">
        <div className="h-10 w-10 sm:h-14 sm:w-14 border-l border-b border-[var(--wine)]" />
        <div className="h-10 w-10 sm:h-14 sm:w-14 border-r border-b border-[var(--wine)]" />
      </div>
    </motion.div>
  );
}

