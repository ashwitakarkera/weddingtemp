import { motion } from "framer-motion";

export default function YouAreInvited({ floral }) {
  return (
    <motion.section
      id="invited"
      className="min-h-screen bg-[var(--ivory)] flex items-center justify-center p-4 sm:p-6 md:p-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Wine background card */}
      <div className="bg-[var(--wine)] p-8 sm:p-12 md:p-16 rounded-none shadow-2xl text-[var(--ivory)] w-full max-w-7xl relative overflow-hidden flex items-center justify-center min-h-[80vh] sm:min-h-0">
        
        {/* INNER BORDER LINES - Frame style matching Hero */}
        <div className="absolute inset-4 sm:inset-6 pointer-events-none">
          <div className="absolute top-0 left-0 w-8 h-8 sm:w-16 sm:h-16 border-t-2 border-l-2 border-[var(--ivory)]/30" />
          <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 border-t-2 border-r-2 border-[var(--ivory)]/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-16 sm:h-16 border-b-2 border-l-2 border-[var(--ivory)]/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-16 sm:h-16 border-b-2 border-r-2 border-[var(--ivory)]/30" />
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 relative z-10 w-full"
        >
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl mb-2 font-vin font-bold tracking-tight"
            >
              You are
            </motion.h2>

            <motion.h1
              className="text-6xl sm:text-8xl md:text-9xl mb-8 sm:mb-10 font-vin font-bold leading-none"
            >
              Invited
            </motion.h1>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="space-y-6 sm:space-y-8 font-vin text-lg sm:text-xl md:text-2xl"
            >
              {[
                "We're so excited to share this special day with you! As we begin our journey together we'd love for you to join us in celebrating our big day.",
                "Here you'll find all the details you need — our love story, event schedule, venue information, and more.",
                "Your presence means the world to us and we can't wait to create unforgettable memories together."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="leading-relaxed opacity-90 font-medium"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            {/* SIGNATURE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="font-vin mt-12 sm:mt-16 text-xl sm:text-2xl"
            >
              <p className="opacity-70 italic">With Love,</p>
              <p className="text-3xl sm:text-5xl md:text-6xl mt-2 font-bold tracking-tight font-vin">
                Rhea & Aditya
              </p>
            </motion.div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center pt-10 lg:pt-0"
          >
            <motion.img
              src={floral}
              alt="Floral decoration"
              className="w-[240px] sm:w-[350px] md:w-[450px] lg:w-[500px] opacity-95 drop-shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}