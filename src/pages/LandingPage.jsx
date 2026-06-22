import Hero from '../components/sections/Hero.jsx';
import LatestNews from '../components/sections/LatestNews.jsx';
import Achievements from '../components/sections/Achievements.jsx';
import DonateBand from '../components/sections/DonateBand.jsx';
import About from '../components/sections/About.jsx';
import Partners from '../components/sections/Partners.jsx';

// Section order is just the order of these lines. Reorder here to rearrange the
// page — nothing else needs to change.
export default function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <LatestNews />
      <DonateBand />
      <Achievements />
      
      
      <Partners />
    </>
  );
}
