// components/RSVP.jsx
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[var(--ivory)] py-20 px-6 flex justify-center font-vin">
      <div className="w-full max-w-4xl text-center text-[var(--wine)]">
        
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
          className="text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-16 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your presence means the world to us. We feel incredibly blessed to share 
          this special weekend with our favourite people and can't wait to make 
          lifelong memories together.
        </motion.p>

        {/* CONTACT & ADDRESS BOX */}
        <motion.div 
          className="border-t border-b border-[var(--wine)]/20 py-12 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Address */}
            <div>
              <h3 className="tracking-[0.3em] text-sm uppercase mb-4 font-bold">Residential Address</h3>
              <p className="text-lg md:text-xl opacity-90">
                123, Heritage Residency,<br />
                Khar Road, Navi Mumbai,<br />
                Maharashtra - 410210
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="tracking-[0.3em] text-sm uppercase mb-4 font-bold">Contact Details</h3>
              <p className="text-lg md:text-xl opacity-90">
                +91 98765 43210<br />
                +91 12345 67890<br />
                hello@weddingcelebration.com
              </p>
            </div>
          </div>
        </motion.div>

        {/* COPYRIGHT */}
        <motion.div 
          className="opacity-70 text-sm tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <p className="mb-2">© 2024 Starx Innovation and Solutions</p>
          <p className="font-bold">Made with Love by Ashwita K</p>
        </motion.div>

      </div>
    </footer>
  );
}