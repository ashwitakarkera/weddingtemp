// components/VenueStay.jsx
import { motion } from "framer-motion";

export default function VenueStay() {
  const venues = [
    {
      type: "Stay Option",
      name: "Hotel Rosewood",
      description: "Comfortable rooms, close to the venue with cab pick‑up options.",
      link: "https://www.google.com/maps/search/?api=1&query=Hotel+Rosewood"
    },
    {
      type: "Stay Option",
      name: "Grand Heritage Suites",
      description: "Spacious suites perfect for families and groups, cab assistance available.",
      link: "https://www.google.com/maps/search/?api=1&query=Grand+Heritage+Suites"
    },
    {
      type: "Wedding Venue",
      name: "Whispering Pines Estate",
      description: "Ceremony and reception under the stars surrounded by pine trees.",
      link: "https://www.google.com/maps/search/?api=1&query=Whispering+Pines+Estate"
    }
  ];

  return (
    <section id="venue" className="bg-[var(--wine)] py-16 px-6 flex justify-center">
      <motion.div
        className="w-full max-w-5xl text-[var(--ivory)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center tracking-[0.4em] text-2xl uppercase mb-3 font-bold font-vin"
        >
          Venue & Stay
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center text-sm md:text-base mb-10 opacity-80 font-bold"
        >
          Recommended stay options and our wedding venue. Tap a card to open it in Google Maps.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3 font-bold">
          {venues.map((venue, index) => (
            <motion.a
              key={venue.name}
              href={venue.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[var(--wine)]/40 border border-[var(--ivory)]/30 rounded-lg p-5 flex flex-col justify-between hover:bg-[var(--ivory)] hover:text-[var(--wine)] transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-[0.65rem] tracking-[0.25em] uppercase mb-2 opacity-80">
                  {venue.type}
                </p>
                <h3 className="text-lg font-semibold mb-2">{venue.name}</h3>
                <p className="text-sm opacity-90">{venue.description}</p>
              </div>
              <p className="mt-4 text-xs tracking-[0.2em] uppercase group-hover:underline">
                View in Google Maps →
              </p>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm text-bold opacity-70"
        >
          Cabs can be arranged from both recommended hotels to the venue on request.
        </motion.p>
      </motion.div>
    </section>
  );
}
