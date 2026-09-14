import MarqueeBar from "../components/MarqueeBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/ui/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans">
      {/* Top Contact Marquee */}
      <MarqueeBar />

      {/* Luxury E-Commerce Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Additional homepage content sections */}
      </main>
    </div>
  );
};

export default Home;