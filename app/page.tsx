import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyPetMove from "./components/WhyPetMove";
export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-blue-50 to-green-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>

      <Hero />
      <HowItWorks />
      <WhyPetMove />


  
    </main> 
 );
}