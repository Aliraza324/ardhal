import MarqueeBar from "../components/MarqueeBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/ui/HeroSection";
import AboutUs from "../components/AboutUs";
import OurMission from "../components/OurMission";
import BrandSection from "../components/BrandSection";
import DiscoverVehicleParts from "../components/DiscoverVehicleParts";
import OurCollection from "../components/OurCollection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

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
        {/* About Us Section */}
        <AboutUs />

        {/* Our Mission Section */}
        <OurMission />

        {/* Brand Sliders Section */}
        <BrandSection />

        {/* Discover Vehicle Parts Section */}
        <DiscoverVehicleParts />

        {/* Our Collection Slider (Grab to Scroll) */}
        <OurCollection />

        {/* Enquiry / Contact Us Form */}
        <ContactUs />
      </main>

      {/* Modern Luxury Footer */}
      <Footer />
    </div>
  );
};

export default Home;