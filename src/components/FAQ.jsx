// components/FAQ.jsx
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "What time should I arrive at the wedding?",
      answer: "Our ceremony begins at 1:00 PM. We strongly encourage guests to arrive by 12:45 PM so you have enough time for parking, finding your seat, and settling in comfortably."
    },
    {
      question: "Is there transportation to and from the venue?",
      answer: "Yes, shuttle service will run between the main hotel and the venue before and after the ceremony. The detailed shuttle schedule will be shared closer to the wedding date."
    },
    {
      question: "Are gifts expected?",
      answer: "Your blessings and presence mean the most to us. If you would still like to gift something, a small gesture or contribution of your choice is more than enough—please do not feel obliged."
    },
    {
      question: "Will there be vegetarian and Jain options?",
      answer: "Yes, there will be a mix of vegetarian and non‑vegetarian dishes, with Jain options available on request. If you have any specific dietary restrictions, please mention them while RSVPing."
    }
  ];

  return (
    <section id="faq" className="bg-[var(--ivory)] py-16 px-6 flex justify-center">
      <motion.div
        className="w-full max-w-5xl text-[var(--wine)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center tracking-[0.4em] text-2xl font-vin font-bold uppercase mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 border border-[var(--wine)]/20 rounded-lg p-5 shadow-sm"
            >
              <h3 className="font-semibold mb-2 text-sm uppercase tracking-[0.15em]">
                {faq.question}
              </h3>
              <p className="text-sm leading-7">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
