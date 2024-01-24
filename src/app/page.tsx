// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about";
import OurStats from "./our-stats";
import EventContent from "./services";
import Faq from "./faq";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <EventContent />
      <AboutEvent />
      <Footer />
    </>
  );
}
