import Nav from "@/components/nav";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
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
      <Pillars />
      <PaymentRails />
      <Developers />
      <CTA />
      <Footer />
    </main>
  );
}
