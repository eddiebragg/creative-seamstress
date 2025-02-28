// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import About from "./about";
import Contact from "./contact";
import Services from "./services";



export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
