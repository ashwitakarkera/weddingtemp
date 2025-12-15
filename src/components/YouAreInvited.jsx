// components/YouAreInvited.jsx
import { motion } from "framer-motion";

export default function YouAreInvited({ floral }) {
  return (
    <section
      id="rsvp"
      className="min-h-screen bg-[var(--wine)] flex items-center justify-center p-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 text-[var(--ivory)]"
      >
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl mb-4 font-ger"
          >
            You are
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl sm:text-7xl mb-10 font-ger"
          >
            Invited
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.25 }
              }
            }}
            className="space-y-10 font-vin text-xl sm:text-2xl"
          >
            {[
              "We're so excited to share this special day with you! As we begin our journey together we'd love for you to join us in celebrating our big day.",
              "Here you'll find all the details you need — our love story event schedule venue information RSVP and more.",
              "Your presence means the world to us and we can't wait to create unforgettable memories together."
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="leading-8"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className="font-vin mt-16 text-xl sm:text-2xl mb-10"
          >
            <p>With Love,</p>
            <p className="font-script text-3xl mt-2 font-ger">
              Rhea & Aditya
            </p>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <motion.img
            src={floral}
            alt="Floral decoration"
            className="w-[260px] sm:w-[320px] md:w-[400px] opacity-90"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
