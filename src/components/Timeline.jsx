import { motion } from "framer-motion";

// Import images
import haldiImg from "../assets/images/haldi.jfif";
import mehendiImg from "../assets/images/mehendi.jfif";
import sangeetImg from "../assets/images/sangeet.jfif";
import bacheloretteImg from "../assets/images/bachelerotte.jfif";
import weddingImg from "../assets/images/wedding.jfif";
import receptionImg from "../assets/images/reception.jfif";

export default function Timeline() {
  const events = [
    { title: "Haldi Ceremony", date: "16th Oct 2030 · 10:00 AM", description: "A bright, joyful morning filled with turmeric, laughter, and blessings.", image: haldiImg },
    { title: "Mehendi Night", date: "16th Oct 2030 · 7:00 PM", description: "Intricate henna, music, and stories as we get ready for the celebrations.", image: mehendiImg },
    { title: "Sangeet", date: "17th Oct 2030 · 8:00 PM", description: "Dance, performances, and a night of music with family and friends.", image: sangeetImg },
    { title: "Bachelorette Party", date: "18th Oct 2030 · 6:00 PM", description: "One last big party before the big day, full of fun and memories.", image: bacheloretteImg },
    { title: "Wedding Ceremony", date: "19th Oct 2030 · 11:00 AM", description: "The moment we say our vows and begin our forever together.", image: weddingImg },
    { title: "Reception", date: "20th Oct 2030 · 7:00 PM", description: "An elegant evening to celebrate with dinner, music, and dancing.", image: receptionImg },
  ];

  const IvoryCorners = () => (
    <>
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[var(--wine)]/30" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[var(--wine)]/30" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[var(--wine)]/30" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[var(--wine)]/30" />
    </>
  );

  return (
    <motion.section
      id="events"
      className="bg-[var(--wine)] py-16 md:py-24 px-4 sm:px-6 flex justify-center font-vin overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-6xl relative">
        <motion.h2
          className="text-center text-4xl md:text-6xl text-[var(--ivory)] mb-16 md:mb-24 font-vin font-bold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Wedding Events Timeline
        </motion.h2>

        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-40 bottom-10 w-[2px] bg-[var(--ivory)]/25" />

        <div className="space-y-24 md:space-y-20">
          {events.map((event, index) => {
            const isEven = index % 2 === 0; // even index = text left, image right

            return (
              <div
                key={event.title}
                className={`relative flex flex-col md:flex-row items-center w-full ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <motion.div
                  className="w-full md:w-1/2 relative z-10"
                  initial={{ opacity: 0, x: isEven ? -100 : 100, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  <motion.div
                    className="relative p-6 sm:p-7 md:p-8 rounded-xl border border-[var(--wine)]/10 shadow-xl overflow-hidden bg-white text-[var(--wine)] group"
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <IvoryCorners />
                    <div className="text-left">
                      <p className="text-[0.65rem] sm:text-xs tracking-[0.18em] uppercase mb-3 font-bold text-[var(--wine)]/60">
                        {event.date}
                      </p>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[var(--wine)]/85 font-medium">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Image Circle on opposite side */}
                <div
                  className={`w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[var(--ivory)] bg-[var(--ivory)] flex items-center justify-center z-10 ${
                    isEven ? "md:ml-12 mt-6 md:mt-0" : "md:mr-12 mt-6 md:mt-0"
                  }`}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}





