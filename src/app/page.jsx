import { Discover } from "@/components/Discover";
import FeedBack from "@/components/FeedBack";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Insight from "@/components/Insight";
import Navbar from "@/components/Navbar";
import { Slider } from "@/components/Slider";
import WhatsNew from "@/components/WhatsNew";

export default function Home() {
  return (
    <main className="bg-[#102428] text-white min-h-screen overflow-hidden">
      <Navbar />
      <Discover />
      <Slider />
      <GetStarted />
      <WhatsNew />
      <Insight />
      <FeedBack />
      <Footer />
    </main>
  );
}
