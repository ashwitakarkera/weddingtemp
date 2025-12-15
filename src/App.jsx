// App.jsx
import floral from "../src/assets/floral.jpg";
import Hero from "./components/Hero";
import YouAreInvited from "./components/YouAreInvited";
import SaveTheDate from "./components/SaveTheDate";
import OurJourney from "./components/OurJourney";
import Timeline from "./components/Timeline";
import VenueStay from "./components/VenueStay";
import FAQ from "./components/FAQ";
import RSVP from "./components/RSVP";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-[var(--wine)]">
      <Navbar />
      <Hero />
      <YouAreInvited floral={floral} />
      <SaveTheDate />
      <OurJourney />
      <Timeline />
      <VenueStay />
      <FAQ />
      <RSVP />
    </div>
  );
}

