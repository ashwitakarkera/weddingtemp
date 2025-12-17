// components/VenueStay.jsx
import { motion } from "framer-motion";

export default function VenueStay() {
  const venues = [
    {
      type: "Stay Option",
      name: "Hotel Rosewood",
      description: "Comfortable rooms, close to the venue with cab pick-up options.",
      link: "https://maps.google.com"
    },
    {
      type: "Stay Option",
      name: "Grand Heritage Suites",
      description: "Spacious suites perfect for families and groups, cab assistance available.",
      link: "https://maps.google.com"
    },
    {
      type: "Wedding Venue",
      name: "Whispering Pines Estate",
      description: "Ceremony and reception under the stars surrounded by pine trees.",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="venue" className="bg-[var(--wine)] py-20 md:py-32 px-4 sm:px-6 flex justify-center font-vin">
      <motion.div
        className="w-full max-w-7xl text-[var(--ivory)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center   text-3xl sm:text-4xl md:text-6xl mb-6 font-bold font-vin"
        >
          Venue & Stay
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center text-lg sm:text-xl md:text-2xl mb-16 opacity-80 font-medium max-w-3xl mx-auto"
        >
          Recommended stay options and our wedding venue. Tap a card to open it in Google Maps.
        </motion.p>

        {/* CARDS GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {venues.map((venue, index) => (
            <motion.a
              key={venue.name}
              href={venue.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 border border-[var(--ivory)]/20 rounded-sm p-8 md:p-10 flex flex-col justify-between hover:bg-[var(--ivory)] hover:text-[var(--wine)] transition-all duration-500 cursor-pointer shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div>
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 opacity-70 group-hover:opacity-100 font-bold">
                  {venue.type}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  {venue.name}
                </h3>
                <p className="text-lg sm:text-xl opacity-90 leading-relaxed font-medium">
                  {venue.description}
                </p>
              </div>
              
              <div className="mt-12 flex items-center gap-2">
                <p className="text-sm tracking-[0.2em] uppercase font-bold group-hover:translate-x-2 transition-transform duration-300">
                  View Maps
                </p>
                <span className="text-xl">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 py-8 border-t border-[var(--ivory)]/10"
        >
          <p className="text-center text-lg sm:text-xl md:text-2xl italic opacity-70 font-medium">
            "Cabs can be arranged from both recommended hotels to the venue on request."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}