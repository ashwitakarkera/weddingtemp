// components/SaveTheDate.jsx
import { motion } from "framer-motion";
import wedding from "../assets/video/wedding-bg.mp4";

export default function SaveTheDate() {
  return (
    <motion.section
      id="date"
      className="min-h-screen bg-[var(--ivory)] flex items-center justify-center p-10 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src={wedding}
      >
        <source src="/video/wedding-bg.mp4" type={wedding} />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <motion.div
        className="w-full max-w-6xl border-frame p-20 text-center relative z-20"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* DATE */}
        <motion.p
          className="tracking-widest text-[var(--wine)] mb-16 font-bold"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          19<sup>TH</sup> OCTOBER 2030
        </motion.p>

        {/* SAVE */}
        <motion.h1
          className="font-script text-7xl text-[var(--wine)] font-vin font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          Save
        </motion.h1>

        {/* OUR */}
        <motion.p
          className="uppercase tracking-widest text-[var(--wine)] font-vin font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Our
        </motion.p>

        {/* DATE */}
        <motion.h1
          className="font-script text-6xl text-[var(--wine)] mb-16 font-vin font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65 }}
        >
          Date
        </motion.h1>

        {/* LOCATION */}
        <motion.p
          className="tracking-widest text-[var(--wine)] text-xl font-bold font-vin"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          Khar Road, Navi Mumbai
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
