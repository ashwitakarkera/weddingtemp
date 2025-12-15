// components/Timeline.jsx
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
      className="bg-[var(--ivory)] py-16 px-6 flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-5xl">
        {/* TITLE */}
        <motion.h2
          className="text-center tracking-[0.4em] text-2xl uppercase text-[var(--wine)] mb-10 font-vin font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Wedding Events Timeline
        </motion.h2>

        {/* TIMELINE CONTAINER */}
        <div className="relative ml-4 md:ml-6">
          {/* ANIMATED LINE */}
          <motion.div
            className="absolute left-0 top-0 w-[2px] bg-[var(--wine)]/40 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ height: "100%" }}
          />

          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="relative pl-8 md:pl-10 pb-10 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              {/* DOT */}
              <motion.span
                className="absolute -left-[9px] md:-left-[11px] top-1.5 w-3 h-3 rounded-full bg-[var(--wine)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1.3, 1] }}
                transition={{ delay: index * 0.2 + 0.3 }}
              />

              {/* CARD */}
              <motion.div
                className="bg-white/70 border border-[var(--wine)]/20 rounded-md p-4 md:p-5 shadow-sm transition-shadow duration-300"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <p className="text-[0.65rem] md:text-xs tracking-[0.25em] uppercase text-[var(--wine)]/70 mb-1 font-vin font-bold">
                  {event.date}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-[var(--wine)] mb-2 font-vin font-bold">
                  {event.title}
                </h3>
                <p className="text-sm md:text-base leading-7 text-[var(--wine)]/80 font-vin font-bold">
                  {event.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
