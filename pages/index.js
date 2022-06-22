import Contacts from "../components/Contacts";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/navbar";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <Contacts />
      <CTA />
      <Footer />
    </>
  );
}
