import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import { FAQs } from "@/sections/FAQs";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import Introduction from "@/sections/Introduction";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 backdrop-blur-sm z-50 mx-20">
        {" "}
        <Header />
      </div>

      {/* <Header /> */}

      <HeroSection />

      <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
        <Introduction />
        <OurServices />
        <WhyChooseUs />
        <Testimonials />
        <FAQs />
      </div>

      <Footer />
    </>
  );
}
