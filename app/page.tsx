import Nav from "@/components/nav";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import VideoDemo from "@/components/video-demo";
import Story from "@/components/story";
import Pillars from "@/components/pillars";
import PaymentRails from "@/components/payment-rails";
import Developers from "@/components/developers";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HowItWorks />
      <VideoDemo />
      <Story />
      <Pillars />
      <PaymentRails />
      <Developers />
      <CTA />
      <Footer />
    </main>
  );
}
