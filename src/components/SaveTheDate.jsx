import { motion } from "framer-motion";
import wedding from "../assets/video/wedding-bg.mp4";

export default function SaveTheDate() {
  // Shared gradient style for Ivory to Wine
  const gradientTextStyle = {
    background: "linear-gradient(to bottom, var(--ivory) 0%, var(--wine) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

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
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>

      {/* Content */}
      <motion.div
        className="w-full max-w-6xl border-frame p-20 text-center relative z-20 flex flex-col items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* DATE */}
        <motion.p
          className="tracking-widest mb-16 font-bold text-2xl"
          style={gradientTextStyle}
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, scale: 1.1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          19<sup>TH</sup> OCTOBER 2030
        </motion.p>

        {/* SAVE */}
        <motion.h1
          className="font-script text-9xl font-vin font-bold leading-tight"
          style={gradientTextStyle}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1.2 }}
          transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
        >
          Save
        </motion.h1>

        {/* OUR */}
        <motion.p
          className="uppercase tracking-widest font-vin font-bold text-2xl my-2"
          style={gradientTextStyle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          transition={{ delay: 0.55 }}
        >
          Our
        </motion.p>

        {/* DATE (Heading) */}
        <motion.h1
          className="font-script text-9xl mb-16 font-vin font-bold leading-tight"
          style={gradientTextStyle}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1.2 }}
          transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
        >
          Date
        </motion.h1>

        {/* LOCATION */}
        <motion.p
          className="tracking-widest text-3xl font-bold font-vin"
          style={gradientTextStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          Khar Road, Navi Mumbai
        </motion.p>
      </motion.div>
    </motion.section>
  );
}