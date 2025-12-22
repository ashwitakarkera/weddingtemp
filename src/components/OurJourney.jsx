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

  // Text color is now Ivory to stand out against the Wine card
  const ivoryTextStyle = {
    color: "var(--ivory)"
  };

  return (
    <motion.section
      id="journey"
      className="min-h-screen bg-[var(--ivory)] flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 font-vin overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-6xl relative">

        {/* HEADING - Changed to Wine to sit on the Ivory main background */}
        <motion.h2
          className="text-center text-5xl mb-8 sm:mb-12 font-bold text-[var(--wine)]"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          Our Journey Together
        </motion.h2>

        {/* MAIN BOX - Now Wine Background */}
        <motion.div
          className="relative p-8 sm:p-12 md:p-20 bg-[var(--wine)] shadow-[0_25px_60px_rgba(0,0,0,0.4)] rounded-sm mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* IVORY L-SHAPED CORNERS */}
          <div className="absolute top-4 left-4 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-[var(--ivory)]"></div>
          <div className="absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-[var(--ivory)]"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-[var(--ivory)]"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-[var(--ivory)]"></div>

          {/* SUBTEXT */}
          <motion.p
            className="text-3xl sm:text-4xl md:text-5xl text-center mb-16 sm:mb-24 leading-tight font-vin font-bold"
            style={ivoryTextStyle}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            From our first hello, to this beautiful forever.
          </motion.p>

          {/* TIMELINE */}
          <div className="space-y-12 sm:space-y-20 relative">
            {/* VERTICAL CONNECTING LINE - Ivory semi-transparent */}
            <div className="absolute left-[23px] sm:left-[31px] top-8 bottom-8 w-[1px] bg-[var(--ivory)]/30" />

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
                {/* YEAR CIRCLE - Ivory bg with Wine text */}
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[var(--ivory)] flex items-center justify-center text-sm sm:text-xl font-bold bg-[var(--ivory)] shrink-0 shadow-lg font-vin text-[var(--wine)]"
                >
                  {item.year}
                </div>

                {/* TEXT CONTENT */}
                <p 
                  className="w-full leading-snug sm:leading-relaxed text-lg sm:text-2xl md:text-3xl font-bold tracking-tight font-vin"
                  style={ivoryTextStyle}
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