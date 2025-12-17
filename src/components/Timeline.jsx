import { motion } from "framer-motion";

export default function Timeline() {
  const events = [
    {
      title: "Haldi Ceremony",
      date: "16th October 2030 · 10:00 AM",
      description: "A bright, joyful morning filled with turmeric, laughter, and blessings."
    },
    {
      title: "Mehendi Night",
      date: "16th October 2030 · 7:00 PM",
      description: "Intricate henna, music, and stories as we get ready for the celebrations."
    },
    {
      title: "Sangeet",
      date: "17th October 2030 · 8:00 PM",
      description: "Dance, performances, and a night of music with family and friends."
    },
    {
      title: "Bachelorette Party",
      date: "18th October 2030 · 6:00 PM",
      description: "One last big party before the big day, full of fun and memories."
    },
    {
      title: "Wedding Ceremony",
      date: "19th October 2030 · 11:00 AM",
      description: "The moment we say our vows and begin our forever together."
    },
    {
      title: "Reception",
      date: "20th October 2030 · 7:00 PM",
      description: "An elegant evening to celebrate with dinner, music, and dancing."
    }
  ];

  return (
    <motion.section
      id="details"
      className="bg-[var(--ivory)] py-16 md:py-24 px-4 sm:px-6 flex justify-center font-vin overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-7xl">
        {/* TITLE */}
        <motion.h2
          className="text-center  text-3xl sm:text-4xl md:text-6xl text-[var(--wine)] mb-12 md:mb-24 font-vin font-bold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Wedding Events Timeline
        </motion.h2>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <motion.div
                className="h-full cursor-pointer p-8 md:p-12 rounded-2xl border-2 border-[var(--wine)]/20 shadow-xl flex flex-col justify-between font-vin"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.8)", 
                  color: "var(--wine)" 
                }}
                whileHover={{ 
                  backgroundColor: "var(--wine)", 
                  color: "var(--ivory)",
                  scale: 1.03,
                  y: -10
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div>
                  <p className="text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase mb-4 md:mb-6 font-bold opacity-80 font-vin">
                    {event.date}
                  </p>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight font-vin">
                    {event.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium font-vin opacity-90">
                    {event.description}
                  </p>
                </div>

                {/* Decorative Pill shape */}
                <motion.div 
                  className="w-16 md:w-24 h-1 md:h-2 mt-8 md:mt-10 bg-current opacity-30 rounded-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}