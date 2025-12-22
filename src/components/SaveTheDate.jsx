import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/img1.jfif";
import img2 from "../assets/images/img2.jfif";
import img3 from "../assets/images/img3.jfif";
import img4 from "../assets/images/img4.jfif";
import img5 from "../assets/images/img5.jfif";
import img6 from "../assets/images/img6.jfif";
import img7 from "../assets/images/img7.jfif";
import img8 from "../assets/images/img8.jfif";
import img9 from "../assets/images/img9.jfif";
import img10 from "../assets/images/img10.jfif";
import img11 from "../assets/images/img11.jfif";
import img12 from "../assets/images/img12.jfif";

export default function SaveTheDate() {
  const leftImages = [img1, img2, img3, img4, img5, img6];
  const rightImages = [img7, img8, img9, img10, img11, img12];
  const allImages = [...leftImages, ...rightImages];

  const [showGallery, setShowGallery] = useState(false);

  // Reusable Corner Component
  const Corner = ({ className }) => (
    <div className={`absolute w-8 h-8 border-[var(--wine)] ${className}`} />
  );

  return (
    <motion.section
      id="gallery"
      className="min-h-screen bg-[var(--wine)] flex items-center justify-center p-6 sm:p-10 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full max-w-6xl bg-[var(--ivory)] text-center relative z-20 flex flex-col items-center justify-center overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* L-SHAPED CORNERS */}
        <Corner className="top-4 left-4 border-t-2 border-l-2" />
        <Corner className="top-4 right-4 border-t-2 border-r-2" />
        <Corner className="bottom-4 left-4 border-b-2 border-l-2" />
        <Corner className="bottom-4 right-4 border-b-2 border-r-2" />

        <div className="p-8 sm:p-12 lg:p-20 flex flex-col items-center justify-center w-full">
          {/* TITLE */}
          <motion.h1
            className="font-vin text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--wine)] mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Moments
          </motion.h1>

          {/* STACKED SLIDESHOWS - Wrapped in a container that stops overflow */}
          {!showGallery && (
            <div className="w-full flex flex-col gap-6 mt-2 max-w-4xl overflow-hidden">
              {/* TOP: Left-to-right */}
              <motion.div
                className="w-full overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="flex gap-3 py-4"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                >
                  {[...leftImages, ...leftImages].map((src, i) => (
                    <div key={i} className="min-w-[110px] sm:min-w-[130px] h-[190px] sm:h-[210px] bg-white/40 rounded-[1.75rem] overflow-hidden shadow-md flex-shrink-0">
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* BOTTOM: Right-to-left */}
              <motion.div
                className="w-full overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <motion.div
                  className="flex gap-3 py-4"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                >
                  {[...rightImages, ...rightImages].map((src, i) => (
                    <div key={i} className="min-w-[110px] sm:min-w-[130px] h-[190px] sm:h-[210px] bg-white/40 rounded-[1.75rem] overflow-hidden shadow-md flex-shrink-0">
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          )}

          {/* FULL GALLERY VIEW */}
          {showGallery && (
            <motion.div 
              className="mt-6 w-full"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            >
              <div className="flex justify-end mb-4">
                <button 
                  className="px-4 py-2 text-xs font-vin border border-[var(--wine)] rounded-full text-[var(--wine)] hover:bg-[var(--wine)] hover:text-[var(--ivory)] transition-colors"
                  onClick={() => setShowGallery(false)}
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {allImages.map((src, i) => (
                  <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* VIEW GALLERY BUTTON - Now positioned at the bottom */}
          {!showGallery && (
            <motion.button
              className="mt-10 px-8 py-3 rounded-full border border-[var(--wine)] text-[var(--wine)] font-vin font-bold text-xs sm:text-sm hover:bg-[var(--wine)] hover:text-[var(--ivory)] transition-colors relative z-30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setShowGallery(true)}
            >
              View Gallery
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}



