// components/RSVP.jsx
export default function RSVP() {
  return (
    <section className="bg-[var(--wine)] py-16 px-6 flex justify-center">
      <div className="w-full max-w-4xl text-center text-[var(--ivory)]">
        <h2 className="font-script text-4xl md:text-5xl mb-4">
          We can't wait to celebrate with you
        </h2>
        <p className="text-sm md:text-base leading-7 max-w-2xl mx-auto mb-10 opacity-90">
          Your presence means the world to us. We feel incredibly blessed to share this special 
          weekend with our favourite people and can't wait to make lifelong memories together 
          on the dance floor, at the mandap, and everywhere in between.
        </p>

        <div className="bg-[var(--ivory)] text-[var(--wine)] inline-block px-8 py-6 rounded-md shadow-md border border-[var(--ivory)]/60">
          <h3 className="tracking-[0.3em] text-xs uppercase mb-3">Kindly RSVP</h3>
          <p className="text-sm mb-5 max-w-md mx-auto">
            Please confirm your attendance by 1st September 2030 so we can finalise seating, 
            stay arrangements, and meals.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#rsvp"
              className="px-6 py-2 border border-[var(--wine)] bg-[var(--wine)] text-[var(--ivory)] text-sm tracking-[0.2em] uppercase rounded-full hover:bg-transparent hover:text-[var(--wine)] transition-colors duration-300"
            >
              RSVP Online
            </a>
            <a
              href="mailto:youremail@example.com?subject=Wedding%20RSVP"
              className="px-6 py-2 border border-[var(--wine)] text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[var(--wine)] hover:text-[var(--ivory)] transition-colors duration-300"
            >
              Email Your RSVP
            </a>
          </div>

          <p className="text-[0.7rem] mt-4 opacity-80">
            When you RSVP, please mention the total number of family members attending 
            and any special meal requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
