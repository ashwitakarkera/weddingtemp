import floral from "../assets/floral.jpg"; // adjust path if needed


export default function App() {
  return (
    <div className="bg-[var(--wine)]">
      {/* HERO CARD */}
      <div className="min-h-screen bg-[var(--wine)] flex items-center justify-center">
        <main className="w-[90%] max-w-5xl bg-[var(--ivory)] py-10 px-12 md:px-20 border border-[var(--wine)]">
          {/* TOP NAV */}
          <header className="flex items-center justify-between text-[var(--wine)] text-xs tracking-[0.3em] mb-20">
            <div className="hidden md:block w-24 h-8 border-t border-[var(--wine)] relative">
              <span className="absolute -top-3 left-0 text-[var(--wine)] text-lg">
                ❧
              </span>
            </div>


            <nav className="flex gap-10 justify-center flex-1">
              <button className="uppercase">Our Story</button>
              <button className="uppercase">RSVP</button>
              <button className="uppercase">Details</button>
              <button className="uppercase">FAQ</button>
              <button className="uppercase">Contact</button>
            </nav>


            <div className="hidden md:block w-24 h-8 border-t border-[var(--wine)] relative text-right">
              <span className="absolute -top-3 right-0 text-[var(--wine)] text-lg">
                ❧
              </span>
            </div>
          </header>


          {/* CENTER NAMES */}
          <section className="text-center text-[var(--wine)] py-16 md:py-24">
            <h1 className="font-ger  text-5xl md:text-7xl ">
              Rhea
            </h1>


            <p className="font-script font-ger text-4xl md:text-5xl my-3 tracking-wide">
              and
            </p>


            <h1 className="font-ger text-5xl md:text-7xl ">
              Aditya
            </h1>


            <p className="font-script text-2xl md:text-3xl mt-10">
              are getting married
            </p>
          </section>


          {/* DATE */}
          <footer className="text-center text-[var(--wine)] text-xs md:text-sm tracking-[0.3em] mt-10">
            <span className="align-top text-[0.7em] mr-1">19</span>
            <span>TH OCTOBER 2030</span>
          </footer>


          {/* CORNER ORNAMENTS (simple placeholders) */}
          <div className="pointer-events-none">
            {/* Top-left / right */}
            <div className="absolute inset-x-0 top-10">
              <div className="mx-auto w-[90%] max-w-5xl flex justify-between">
                <div className="h-16 w-16 border-l border-t border-[var(--wine)]" />
                <div className="h-16 w-16 border-r border-t border-[var(--wine)]" />
              </div>
            </div>


            {/* Bottom-left / right */}
            <div className="absolute inset-x-0 bottom-10">
              <div className="mx-auto w-[90%] max-w-5xl flex justify-between">
                <div className="h-16 w-16 border-l border-b border-[var(--wine)]" />
                <div className="h-16 w-16 border-r border-b border-[var(--wine)]" />
              </div>
            </div>
          </div>
        </main>
      </div>


      {/* SECTION 2 – YOU ARE INVITED */}
      <main>
        <section className="min-h-screen bg-[var(--wine)] flex items-center justify-center p-10">
          <div className="grid grid-cols-2 gap-20 text-[var(--ivory)]">
            {/* TEXT */}
            <div>
              <h2 className="text-6xl mb-4 font-ger">You are</h2>
              <h1 className="script text-7xl mb-10 font-ger">Invited</h1>


              <p className="leading-8 mb-6 font-ger font-ger">
                We’re so excited to share this special day with you!
              </p>
              <p className="leading-8 mb-6 font-ger">
                As we begin our journey together, we’d love for you to join us in
                celebrating our big day.
              </p>
              <p className="leading-8 mb-6 *font-ger">
                Here, you’ll find all the details you need — our love story, event
                schedule, venue information, RSVP, and more.
              </p>
              <p className="leading-8 mb-10 font-ger">
                Your presence means the world to us, and we can’t wait to create
                unforgettable memories together.
              </p>


              <p>With Love,</p>
              <p className="script text-3xl mt-2 font-ger">Rebecca & Caleb</p>
            </div>


            {/* FLORAL ART */}
            <div className="flex items-center justify-center">
              <img src={floral} alt="floral" className="w-[400px] opacity-90" />
            </div>
          </div>
        </section>


        {/* SECTION 3 – SAVE THE DATE */}
        <section className="min-h-screen bg-[var(--ivory)] flex items-center justify-center p-10">
          <div className="w-full max-w-6xl border-frame p-20 text-center font-ger">
            <p className="tracking-widest text-[var(--wine)] mb-16">
              19<sup>TH</sup> OCTOBER 2030
            </p>


            <img src="/swans.svg" alt="swans" className="mx-auto mb-10 w-48" />


            <h1 className="script text-6xl text-[var(--wine)] font-ger">Save</h1>
            <p className="uppercase tracking-widest text-[var(--wine)] font-ger">
              OUR
            </p>
            <h1 className="script text-6xl text-[var(--wine)] mb-16 font-ger">
              Date
            </h1>


            <p className="tracking-widest text-[var(--wine)] text-sm font-ger">
              Khar Road,Navi Mumbai
            </p>
          </div>
        </section>
        <section className="min-h-screen bg-[var(--wine)] flex items-center justify-center py-16 px-6 font-ger">
  <div className="w-full max-w-5xl text-[var(--ivory)]">
    <h2 className="text-center tracking-[0.4em] text-xs uppercase mb-6">
      Our Journey Together
    </h2>


    <div className="border border-[var(--ivory)]/40 p-8 md:p-12">
      <p className="font-script text-3xl md:text-4xl text-center mb-10">
        From our first hello to this beautiful forever.
      </p>


      {/* simple timeline */}
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="text-sm tracking-[0.2em] uppercase md:w-1/4 mb-2 md:mb-0 ">
            2018
          </div>
          <p className="md:w-3/4 leading-7 text-sm md:text-base font-ger">
            We met by chance and quickly realised that every conversation felt
            like home.
          </p>
        </div>


        <div className="flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="text-sm tracking-[0.2em] uppercase md:w-1/4 mb-2 md:mb-0">
            2021
          </div>
          <p className="md:w-3/4 leading-7 text-sm md:text-base">
            After countless memories, adventures, and late‑night talks, we knew
            we had found our forever person.
          </p>
        </div>


        <div className="flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="text-sm tracking-[0.2em] uppercase md:w-1/4 mb-2 md:mb-0">
            2030
          </div>
          <p className="md:w-3/4 leading-7 text-sm md:text-base">
            Surrounded by the people we love most, we are so excited to begin
            this new chapter as husband and wife.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


  <section className="bg-[var(--ivory)] py-16 px-6 flex justify-center">
  <div className="w-full max-w-5xl">
    <h2 className="text-center tracking-[0.4em] text-xs uppercase text-[var(--wine)] mb-10">
      Wedding Events Timeline
    </h2>


    <div className="relative border-l-2 border-[var(--wine)]/40 ml-4 md:ml-6">
      {/* TIMELINE ITEM */}
      {[
        {
          title: "Haldi Ceremony",
          date: "16th October 2030 · 10:00 AM",
          description:
            "A bright, joyful morning filled with turmeric, laughter, and blessings.",
        },
        {
          title: "Mehendi Night",
          date: "16th October 2030 · 7:00 PM",
          description:
            "Intricate henna, music, and stories as we get ready for the celebrations.",
        },
        {
          title: "Sangeet",
          date: "17th October 2030 · 8:00 PM",
          description:
            "Dance, performances, and a night of music with family and friends.",
        },
        {
          title: "Bachelorette Party",
          date: "18th October 2030 · 6:00 PM",
          description:
            "One last big party before the big day, full of fun and memories.",
        },
        {
          title: "Wedding Ceremony",
          date: "19th October 2030 · 11:00 AM",
          description:
            "The moment we say our vows and begin our forever together.",
        },
        {
          title: "Reception",
          date: "20th October 2030 · 7:00 PM",
          description:
            "An elegant evening to celebrate with dinner, music, and dancing.",
        },
      ].map((event, index) => (
        <div
          key={event.title}
          className="relative pl-8 md:pl-10 pb-10 group"
        >
          {/* dot */}
          <span className="absolute -left-[9px] md:-left-[11px] top-1.5 w-3 h-3 rounded-full bg-[var(--wine)] transition-transform duration-300 group-hover:scale-125" />


          {/* card */}
          <div className="bg-white/70 border border-[var(--wine)]/20 rounded-md p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-[0.65rem] md:text-xs tracking-[0.25em] uppercase text-[var(--wine)]/70 mb-1">
              {event.date}
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-[var(--wine)] mb-2">
              {event.title}
            </h3>
            <p className="text-sm md:text-base leading-7 text-[var(--wine)]/80">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="bg-[var(--wine)] py-16 px-6 flex justify-center">
  <div className="w-full max-w-5xl text-[var(--ivory)]">
    <h2 className="text-center tracking-[0.4em] text-xs uppercase mb-3">
      Venue & Stay
    </h2>
    <p className="text-center text-sm md:text-base mb-10 opacity-80">
      Recommended stay options and our wedding venue. Tap a card to open it in Google Maps.
    </p>


    <div className="grid gap-6 md:grid-cols-3">
      {/* HOTEL 1 */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Hotel+Rosewood"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[var(--wine)]/40 border border-[var(--ivory)]/30 rounded-lg p-5 flex flex-col justify-between hover:bg-[var(--ivory)] hover:text-[var(--wine)] transition-colors duration-300 cursor-pointer"
      >
        <div>
          <p className="text-[0.65rem] tracking-[0.25em] uppercase mb-2 opacity-80">
            Stay Option
          </p>
          <h3 className="text-lg font-semibold mb-2">Hotel Rosewood</h3>
          <p className="text-sm opacity-90">
            Comfortable rooms, close to the venue with cab pick‑up options.
          </p>
        </div>
        <p className="mt-4 text-xs tracking-[0.2em] uppercase group-hover:underline">
          View in Google Maps →
        </p>
      </a>


      {/* HOTEL 2 */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Grand+Heritage+Suites"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[var(--wine)]/40 border border-[var(--ivory)]/30 rounded-lg p-5 flex flex-col justify-between hover:bg-[var(--ivory)] hover:text-[var(--wine)] transition-colors duration-300 cursor-pointer"
      >
        <div>
          <p className="text-[0.65rem] tracking-[0.25em] uppercase mb-2 opacity-80">
            Stay Option
          </p>
          <h3 className="text-lg font-semibold mb-2">Grand Heritage Suites</h3>
          <p className="text-sm opacity-90">
            Spacious suites perfect for families and groups, cab assistance available.
          </p>
        </div>
        <p className="mt-4 text-xs tracking-[0.2em] uppercase group-hover:underline">
          View in Google Maps →
        </p>
      </a>


      {/* VENUE */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Whispering+Pines+Estate"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[var(--wine)]/70 border border-[var(--ivory)] rounded-lg p-5 flex flex-col justify-between hover:bg-[var(--ivory)] hover:text-[var(--wine)] transition-colors duration-300 cursor-pointer"
      >
        <div>
          <p className="text-[0.65rem] tracking-[0.25em] uppercase mb-2 opacity-80">
            Wedding Venue
          </p>
          <h3 className="text-lg font-semibold mb-2">Whispering Pines Estate</h3>
          <p className="text-sm opacity-90">
            Ceremony and reception under the stars surrounded by pine trees.
          </p>
        </div>
        <p className="mt-4 text-xs tracking-[0.2em] uppercase group-hover:underline">
          Open in Google Maps →
        </p>
      </a>
    </div>


    <p className="mt-6 text-center text-xs opacity-70">
      Cabs can be arranged from both recommended hotels to the venue on request.
    </p>
  </div>
</section>
<section className="bg-[var(--ivory)] py-16 px-6 flex justify-center">
  <div className="w-full max-w-5xl text-[var(--wine)]">
    <h2 className="text-center tracking-[0.4em] text-xs uppercase mb-10">
      Frequently Asked Questions
    </h2>


    <div className="grid gap-6 md:grid-cols-2">
      {/* ARRIVAL TIME */}
      <div className="bg-white/80 border border-[var(--wine)]/20 rounded-lg p-5 shadow-sm">
        <h3 className="font-semibold mb-2 text-sm uppercase tracking-[0.15em]">
          What time should I arrive at the wedding?
        </h3>
        <p className="text-sm leading-7">
          Our ceremony begins at 1:00 PM. We strongly encourage guests to arrive
          by 12:45 PM so you have enough time for parking, finding your seat,
          and settling in comfortably.
        </p>
      </div>


      {/* TRANSPORTATION */}
      <div className="bg-white/80 border border-[var(--wine)]/20 rounded-lg p-5 shadow-sm">
        <h3 className="font-semibold mb-2 text-sm uppercase tracking-[0.15em]">
          Is there transportation to and from the venue?
        </h3>
        <p className="text-sm leading-7">
          Yes, shuttle service will run between the main hotel and the venue
          before and after the ceremony. The detailed shuttle schedule will be
          shared closer to the wedding date.
        </p>
      </div>


      {/* INDIAN POV – DRESS CODE */}
      <div className="bg-white/80 border border-[var(--wine)]/20 rounded-lg p-5 shadow-sm">
        <h3 className="font-semibold mb-2 text-sm uppercase tracking-[0.15em]">
          What should I wear for the functions?
        </h3>
        <p className="text-sm leading-7">
          For Haldi and Mehendi, bright traditional outfits like kurta sets,
          lehengas, and sarees are perfect. For the Sangeet, feel free to dress
          up in festive Indian wear, and for the wedding and reception, we
          recommend elegant ethnic or Indo‑western formals.
        </p>
      </div>


      {/* INDIAN POV – GIFTS */}
      <div className="bg-white/80 border border-[var(--wine)]/20 rounded-lg p-5 shadow-sm">
        <h3 className="font-semibold mb-2 text-sm uppercase tracking-[0.15em]">
          Are gifts expected?
        </h3>
        <p className="text-sm leading-7">
          Your blessings and presence mean the most to us. If you would still
          like to gift something, a small gesture or contribution of your choice
          is more than enough—please do not feel obliged.
        </p>
      </div>


      {/* INDIAN POV – KIDS / FAMILY */}
      <div className="bg-white/80 border border-[var(--wine)]/20 rounded-lg p-5 shadow-sm">
        <h3 className="font-semibold mb-2 text-sm uppercase tracking-[0.15em]">
          Can I bring my children and family members?
        </h3>
        <p className="text-sm leading-7">
          Yes, this is a family celebration and children are most welcome unless
          mentioned otherwise on your invite. Please include them when you RSVP
          so we can plan seating and meals accordingly.
        </p>
      </div>


      {/* FOOD / DIETARY */}
      <div className="bg-white/80 border border-[var(--wine)]/20 rounded-lg p-5 shadow-sm">
        <h3 className="font-semibold mb-2 text-sm uppercase tracking-[0.15em]">
          Will there be vegetarian and Jain options?
        </h3>
        <p className="text-sm leading-7">
          Yes, there will be a mix of vegetarian and non‑vegetarian dishes, with
          Jain options available on request. If you have any specific dietary
          restrictions, please mention them while RSVPing.
        </p>
      </div>
    </div>
  </div>
</section>
{/* CELEBRATE & RSVP SECTION */}
<section className="bg-[var(--wine)] py-16 px-6 flex justify-center">
  <div className="w-full max-w-4xl text-center text-[var(--ivory)]">
    <h2 className="font-script text-4xl md:text-5xl mb-4">
      We can’t wait to celebrate with you
    </h2>
    <p className="text-sm md:text-base leading-7 max-w-2xl mx-auto mb-10 opacity-90">
      Your presence means the world to us. We feel incredibly blessed to share
      this special weekend with our favourite people and can’t wait to make
      lifelong memories together on the dance floor, at the mandap, and
      everywhere in between.
    </p>


    {/* RSVP CARD */}
    <div className="bg-[var(--ivory)] text-[var(--wine)] inline-block px-8 py-6 rounded-md shadow-md border border-[var(--ivory)]/60">
      <h3 className="tracking-[0.3em] text-xs uppercase mb-3">
        Kindly RSVP
      </h3>
      <p className="text-sm mb-5 max-w-md mx-auto">
        Please confirm your attendance by 1st September 2030 so we can finalise
        seating, stay arrangements, and meals.
      </p>


      {/* BUTTONS – choose one or both */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {/* If you have a Google Form or RSVP page, put its link in href */}
        <a
          href="#rsvp"
          className="px-6 py-2 border border-[var(--wine)] bg-[var(--wine)] text-[var(--ivory)] text-sm tracking-[0.2em] uppercase rounded-full hover:bg-transparent hover:text-[var(--wine)] transition-colors duration-300"
        >
          RSVP Online
        </a>


        {/* Email fallback */}
        <a
          href="mailto:youremail@example.com?subject=Wedding%20RSVP"
          className="px-6 py-2 border border-[var(--wine)] text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[var(--wine)] hover:text-[var(--ivory)] transition-colors duration-300"
        >
          Email Your RSVP
        </a>
      </div>


      {/* Note for Indian context (families RSVPing together) */}
      <p className="text-[0.7rem] mt-4 opacity-80">
        When you RSVP, please mention the total number of family members
        attending and any special meal requirements.
      </p>
    </div>
  </div>
</section>



      </main>
    </div>
  );
} 