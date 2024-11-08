import Booking from "@/components/Booking";
import Category from "@/components/Category";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TopSelling from "@/components/TopSelling";
 
export default function Home() {
  return (
    <div>
      <Hero/>
      <Category/>
      <TopSelling/>
      <Booking/>
      <Testimonials/>
      <Company/>
      <Contact/>
    </div>
  );
}
