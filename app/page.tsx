import ContactPage from "@/components/widgets/Home/Contactpage";
import DriveBusiness from "@/components/widgets/Home/DriveBusiness";
import Hero from "@/components/widgets/Home/Hero";
import NumbersSection from "@/components/widgets/Home/NumbersSection";

export default function Home() {
  return (
  <div>
    <Hero/>
    <DriveBusiness/>
    <NumbersSection/>
    <ContactPage/>
  </div>
  );
}
