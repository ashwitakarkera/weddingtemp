import { motion } from "framer-motion";

export default function Footer() {
  const whatsappNumber = "919876543210"; // Replace with your actual number
  const message = encodeURIComponent("Hi! I would like to RSVP for the wedding celebration.");

  return (
    <footer className="bg-[var(--wine)] py-20 px-6 flex justify-center font-vin overflow-hidden">
      <div className="w-full max-w-4xl text-center text-[var(--ivory)]">
        
        {/* GOOD WISHES / HEADING */}
        <motion.h2 
          className="text-4xl md:text-6xl mb-6 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We can't wait to celebrate with you
        </motion.h2>

        <motion.p 
          className="text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12 font-medium opacity-90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your presence means the world to us. We feel incredibly blessed to share 
          this special weekend with our favourite people and can't wait to make 
          lifelong memories together.
        </motion.p>

        {/* RSVP SECTION */}
        <motion.div 
          className="flex flex-col items-center mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 border-2 border-[var(--ivory)] text-[var(--ivory)] font-bold text-lg md:text-xl tracking-widest uppercase hover:bg-[var(--ivory)] hover:text-[var(--wine)] transition-all duration-500 rounded-sm"
          >
            {/* L-Borders for the Button */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--ivory)] group-hover:border-[var(--wine)]" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--ivory)] group-hover:border-[var(--wine)]" />
            
            RSVP on WhatsApp
          </a>
          <p className="mt-4 opacity-60 text-sm tracking-widest uppercase">Kindly RSVP by September 2030</p>
        </motion.div>

        {/* ADDRESS BOX */}
        <motion.div 
          className="border-t border-[var(--ivory)]/20 pt-12 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="tracking-[0.3em] text-sm uppercase mb-4 font-bold opacity-70">Residential Address</h3>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            123, Heritage Residency, Khar Road,<br />
            Navi Mumbai, Maharashtra - 410210
          </p>
        </motion.div>

        {/* COPYRIGHT */}
        <motion.div 
          className="opacity-60 text-xs md:text-sm tracking-widest uppercase space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p>© 2025 Starx Innovation and Solutions</p>
          <p className="font-bold tracking-[0.2em]">Made by Ashwita K</p>
        </motion.div>

      </div>
    </footer>
  );
}