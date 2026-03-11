import Services from "@/components/Services"
import OurTeam from "@/components/OurTeam";
import MissionVision from "@/components/MissionVision";
import Generosity from "@/components/Generosity";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ServeAreas from "@/components/ServeAreas";
import Testimonials from "@/components/Testimonials";
import VolunteerForm from "@/components/VolunteerForm";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Services />
      <Hero />
      <Mission />
      <MissionVision />
      <ServeAreas />
      <Testimonials />
      <VolunteerForm />
      <Generosity />
      <OurTeam />
      <CallToAction />
      <Footer />
<script src="/form-handler.js"></script>
    </main>
  );
}
