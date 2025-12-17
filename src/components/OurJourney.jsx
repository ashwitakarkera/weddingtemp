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

  const wineTextStyle = {
    color: "var(--wine)"
  };

  return (
    <motion.section
      id="our-story"
      className="min-h-screen bg-[var(--wine)] flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 font-vin overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-6xl relative">

        {/* HEADING - Updated to Title Case / Normal Casing */}
        <motion.h2
          className="text-center  text-5xl  mb-8 sm:mb-12 font-bold text-[var(--ivory)]"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          Our Journey Together
        </motion.h2>

        {/* MAIN BOX */}
        <motion.div
          className="relative border-2 border-[var(--ivory)]/30 p-6 sm:p-10 md:p-16 bg-[var(--ivory)] shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-sm mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* ORNAMENTAL CORNERS */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-6 h-6 sm:w-10 sm:h-10 border-t-2 border-l-2 border-[var(--wine)]/20"></div>
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-10 sm:h-10 border-t-2 border-r-2 border-[var(--wine)]/20"></div>
          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-10 sm:h-10 border-b-2 border-l-2 border-[var(--wine)]/20"></div>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-10 sm:h-10 border-b-2 border-r-2 border-[var(--wine)]/20"></div>

          {/* SUBTEXT */}
          <motion.p
            className="text-3xl sm:text-4xl md:text-4xl text-center mb-12 sm:mb-20 leading-tight font-vin font-bold"
            style={wineTextStyle}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            From our first hello ,to this beautiful forever.<br /> 
            <span className="text-xl sm:text-2xl md:text-3xl block mt-2 sm:mt-4 opacity-70 font-medium font-vin"></span>
          </motion.p>

          {/* TIMELINE */}
          <div className="space-y-10 sm:space-y-16 relative">
            {/* VERTICAL CONNECTING LINE */}
            <div className="absolute left-[23px] sm:left-[31px] top-8 bottom-8 w-[1px] bg-[var(--wine)]/20" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex flex-row items-center gap-6 sm:gap-12 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.7 }}
              >
                {/* YEAR CIRCLE */}
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[var(--wine)]/40 flex items-center justify-center text-sm sm:text-xl font-bold bg-[var(--ivory)] shrink-0 shadow-md font-vin"
                  style={wineTextStyle}
                >
                  {item.year}
                </div>

                {/* TEXT CONTENT */}
                <p 
                  className="w-full leading-snug sm:leading-relaxed text-lg sm:text-2xl md:text-3xl font-bold tracking-tight font-vin"
                  style={wineTextStyle}
                >
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