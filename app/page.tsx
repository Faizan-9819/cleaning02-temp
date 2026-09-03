import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Areas from "@/app/components/Areas";
import WhyUs from "@/app/components/WhyUs";
import Services from "@/app/components/Services";
import Process from "@/app/components/Process";
import Stats from "@/app/components/Stats";
import Sectors from "@/app/components/Sectors";
import Team from "@/app/components/Team";
import Testimonials from "@/app/components/Testimonials";
import Faq from "@/app/components/Faq";
import Journal from "@/app/components/Journal";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import MobileCta from "@/app/components/MobileCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Areas />
        <WhyUs />
        <Services />
        <Process />
        <Stats />
        <Sectors />
        <Team />
        <Testimonials />
        <Faq />
        <Journal />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCta />
    </>
  );
}
