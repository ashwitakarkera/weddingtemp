// components/OurJourney.jsx
import { motion } from "framer-motion";

export default function OurJourney() {
  const timeline = [
    {
      year: '2018',
      text: 'We met by chance and quickly realised that every conversation felt like home.'
    },
    {
      year: '2021',
      text: 'After countless memories, adventures, and late-night talks, we knew we had found our forever person.'
    },
    {
      year: '2030',
      text: 'Surrounded by the people we love most, we are so excited to begin this new chapter as husband and wife.'
    }
  ];

  return (
    <motion.section
      id="journey"
      className="min-h-screen bg-[var(--wine)] flex items-center justify-center py-16 px-6 font-vin"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl text-[var(--ivory)]">

        {/* HEADING */}
        <motion.h2
          className="text-center tracking-[0.4em] text-xl uppercase mb-6 font-vin"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Journey Together
        </motion.h2>

        {/* FRAME */}
        <motion.div
          className="border border-[var(--ivory)]/40 p-8 md:p-12"
          initial={{ scale: 0.97, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* SUBTEXT */}
          <motion.p
            className="font-script text-3xl md:text-4xl text-center mb-10 font-vin"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From our first hello to this beautiful forever.
          </motion.p>

          {/* TIMELINE */}
          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex flex-col md:flex-row md:items-start md:gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="text-sm tracking-[0.2em] uppercase md:w-1/4 mb-2 md:mb-0">
                  {item.year}
                </div>
                <p className="md:w-3/4 leading-7 md:text-base text-2xl font-vin">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
