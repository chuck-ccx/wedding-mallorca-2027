import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Details from "./components/Details";
import Schedule from "./components/Schedule";
import Accommodation from "./components/Accommodation";
import DressCode from "./components/DressCode";
import Faq from "./components/Faq";
import Rsvp from "./components/Rsvp";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Details />
      <Schedule />
      <Accommodation />
      <DressCode />
      <Faq />
      <Rsvp />
    </main>
  );
}
